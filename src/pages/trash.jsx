/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { TrashMailCardComponent } from "../components/trashMailComponent"
import { MailContext } from "../contexts/mailContext"

export const Trash = () => {
    const {trash} = useContext(MailContext);
    return (
        <>
            <h2 className="sub-heading">{`Trash`}</h2>
            {trash.map((mailData) => <TrashMailCardComponent mailData={mailData} key={mailData?.mId}/> )}
        </>
    )
}