import { useParams } from "react-router-dom"

export const Mail = () => {
    const {mailID} = useParams();
    return (
        <>
            <h3>
                {`Mail-> ${mailID}`}
            </h3>
        </>
    )
}