/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useContext } from "react"
import { Link } from "react-router-dom"
import { MailContext } from "../contexts/mailContext"

export const MailCardComponent = ({mailData}) =>{
    const {starMail, addToSpam, addToTrash, markAsRead} = useContext(MailContext)
    return(
        <div key={mailData?.mId} className={mailData?.unread ? `read-mails mails` : `mails`}>
          <h3 className="mail-subject"> {`Subject: ${mailData?.subject}`} </h3>
          <button className="star" onClick={() => starMail(mailData?.mId)}>
            {mailData?.isStarred ? '★' : '☆'}
          </button>
          <p className="mail-content">{mailData?.content}</p>
          <Link to={`details/${mailData?.mId}`} className="details">
            View Details
          </Link>
          <button className="mail-action-btn" onClick={() => addToTrash(mailData)}>Delete</button>
          <button className="mail-action-btn" onClick={() => markAsRead(mailData?.mId)}>
            {mailData.unread? 'Mark as Read' : 'Mark as Unread'}
          </button>
          <button className="mail-action-btn" onClick={() => addToSpam(mailData)}>Report Spam</button>
        </div>
    )
}