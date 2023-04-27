import { useContext } from "react";
import { MailContext } from "../contexts/mailContext";

export const FilterComponent = () => {
    const {checkBoxHandler} = useContext(MailContext)
    return (
        <div className="filters">
            <fieldset>
                <legend>Login</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        onChange={checkBoxHandler}
                                        value="unread" />
                                    Show unread mails
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        onChange={checkBoxHandler}
                                        value="isStarred" />
                                    Show starred mails
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
}