/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"
import { SpamMailCardComponent } from "../components/spamMailCardComponent";
import { emptyImages } from "../images/empty-images";

export const Spam = () => {
    const {spam} = useContext(MailContext)

    return (
        <>
            <h2 className="sub-heading">Spam</h2>
            {spam.length > 0 ?
            spam.map((mail) => <SpamMailCardComponent mailData={mail} key={mail?.mId}/>)
            :
            <img className="empty-img" src={emptyImages.empty_spam} alt="empty spam" />}
        </>
    )
}