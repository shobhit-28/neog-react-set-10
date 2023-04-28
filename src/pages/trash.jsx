/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { TrashMailCardComponent } from "../components/trashMailComponent"
import { MailContext } from "../contexts/mailContext"
import { emptyImages } from "../images/empty-images";

export const Trash = () => {
    const {trash} = useContext(MailContext);
    return (
        <>
            <h2 className="sub-heading">{`Trash`}</h2>
            {trash.length > 0 ?
            trash.map((mailData) => <TrashMailCardComponent mailData={mailData} key={mailData?.mId}/>)
            :
            <img src={emptyImages.empty_trash} alt="empty trash" className="empty-img"/>
            }
        </>
    )
}