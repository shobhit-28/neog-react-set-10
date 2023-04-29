import { useContext } from "react"
import { FilterComponent } from "../components/filterComponent"
import { MailContext } from "../contexts/mailContext"
import { MailCardComponent } from "../components/mailCardComponent"
import { emptyImages } from "../images/empty-images"

export const Inbox = () => {
    const {filteredData} = useContext(MailContext)
    return (
        <>
            <FilterComponent/>
            {filteredData.length > 0 ?
            filteredData.map((mailData) => <MailCardComponent mailData={mailData}key={mailData?.mId} /> )
            : 
            <img className="empty-inbox-img" src={emptyImages.empty_inbox} alt="empty spam" />}
        </>
    )
}