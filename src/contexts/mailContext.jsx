import { createContext, useReducer } from "react";
import { mails } from "../data/mailData";
import { mailReducer } from "./mailReducer";
import { types } from "./types";

export const MailContext = createContext();

// eslint-disable-next-line react/prop-types
export const MailDataHandler = ({children}) =>{

    const { ADD_TO_SPAM,
        ADD_TO_TRASH,
        ADD_TO_CHECKED,
        REMOVE_FROM_CHECKED,
        STAR_MAIL } = types

    const initialState = {
        allMails: mails,
        trash: [],
        spam:[],
        checked:[],
    }

    const [state, dispatch] = useReducer(mailReducer, initialState);

    const checkBoxHandler = (event) => {
        if (event.target.checked) {
            dispatch({
                type: ADD_TO_CHECKED,
                payload: event.target.value
            })
        } else {
            dispatch({
                type: REMOVE_FROM_CHECKED,
                payload: event.target.value
            })
        }
    }

    const filteredData = state.allMails.filter((mail) => (
        state.checked.every(checkbox => mail[checkbox])
      ))

    return(
        <MailContext.Provider value={{checkBoxHandler, filteredData}}>
            {children}
        </MailContext.Provider>
    );

};