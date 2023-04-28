/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useContext } from "react"
import { Link } from "react-router-dom"
import { MailContext } from "../contexts/mailContext"

export const TrashMailCardComponent = ({mailData}) =>{
    const {deletePermanently, recoverMail} = useContext(MailContext)
    return(
        <div key={mailData?.mId} className={mailData?.unread ? `read-mails mails` : `mails`}>
          <Link to={`/mail/${mailData?.mId}`}><h3 className="mail-subject"> {`Subject: ${mailData?.subject}`}</h3></Link>
          <p className="mail-content">{mailData?.content}</p>
          <Link to={`/mail/${mailData?.mId}`} className="details">
            View Details
          </Link>
          <button className="mail-action-btn" onClick={() => deletePermanently(mailData?.mId)}>Delete Permanently</button>
          <button className="mail-action-btn" onClick={() => recoverMail(mailData)}>Recover Mail</button>
        </div>
    )
}