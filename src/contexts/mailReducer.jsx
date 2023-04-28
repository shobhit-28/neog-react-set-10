import { types } from "./types";

export const mailReducer = (state, action) => {
    const { ADD_TO_SPAM,
        ADD_TO_TRASH,
        ADD_TO_CHECKED,
        REMOVE_FROM_CHECKED,
        STAR_MAIL,
        MARK_AS_READ } = types
    switch (action.type) {
        case ADD_TO_SPAM:
            return { ...state, 
                    spam: [...state.spam, action.payload], 
                    allMails: state.allMails.filter(({ mId }) => mId !== action.payload.mId) 
                }

        case ADD_TO_TRASH:
            return {
                ...state,
                trash:[...state.trash, action.payload],
                allMails: state.allMails.filter(({mId}) => mId !== action.payload.mId )
            }

        case ADD_TO_CHECKED:
            return{
                ...state,
                checked: [...state.checked, action.payload]
            }

        case REMOVE_FROM_CHECKED:
            return{
                ...state,
                checked: state.checked.filter((category) => category !== action.payload )
            }

        case STAR_MAIL:
            return{
                ...state,
                allMails: state.allMails.map((obj) => obj.mId === action.payload ? {...obj, isStarred: !obj.isStarred} : obj)
            }

        case MARK_AS_READ:
            return{
                ...state,
                allMails: state.allMails.map((obj) => obj.mId === action.payload ? {...obj, unread: !obj.unread} : obj)
            }

        default:
            return state;
    }
}