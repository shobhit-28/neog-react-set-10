import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MailContext } from "../contexts/mailContext";
import { SingleMailCard } from "../components/singleMailCard";

export const Mail = () => {
    const {filteredData} = useContext(MailContext)
    const {mailID} = useParams();
    const Mail = filteredData.find(({mId}) => mId === mailID );
    return (
        <SingleMailCard mail={Mail} />
    )
}