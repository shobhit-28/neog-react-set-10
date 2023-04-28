import { useParams } from "react-router-dom"
import { SingleMailCard } from "../components/singleMailCard";
import { mails } from "../data/mailData";

export const Mail = () => {
    const {mailID} = useParams();
    const mail = mails.find(({mId}) => mId === mailID )
    return (
        <SingleMailCard mail={mail} />
    )
}