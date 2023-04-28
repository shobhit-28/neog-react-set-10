import { useContext } from "react"
import { FilterComponent } from "../components/filterComponent"
import { MailContext } from "../contexts/mailContext"
import { MailCardComponent } from "../components/mailCardComponent"

export const Inbox = () => {
    const {filteredData} = useContext(MailContext)
    return (
        <>
            <FilterComponent/>
            {filteredData.map((mailData) => <MailCardComponent mailData={mailData}key={mailData?.mId} /> )}
        </>
    )
}