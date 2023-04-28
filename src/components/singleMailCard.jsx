/* eslint-disable react/prop-types */
export const SingleMailCard = ({mail}) => {
    return(
        <div className="single-mail">
            <h1>{mail?.subject}</h1>
            <p>{mail?.content}</p>
        </div>
    )
}