/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useContext } from "react"
import { Link } from "react-router-dom"
import { MailContext } from "../contexts/mailContext"

export const MailCardComponent = ({mailData}) =>{
    const {starMail} = useContext(MailContext)
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
          <button className="mail-action-btn">Delete</button>
          <button className="mail-action-btn">Mark as Read</button>
          <button className="mail-action-btn">Report Spam</button>
        </div>
    )
}