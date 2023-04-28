/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"
import { SpamMailCardComponent } from "../components/spamMailCardComponent";

export const Spam = () => {
    const {spam} = useContext(MailContext)

    return (
        <>
            <h2 className="sub-heading">Spam</h2>
            {spam.map((mail) => <SpamMailCardComponent mailData={mail} key={mail?.mId}/>)}
        </>
    )
}