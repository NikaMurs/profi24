import { useState } from "react";
import getCookie from "../../../functions/getCookie";
import getTableEndpoint from "../../functions/getTableEndpoint";


export default function EditableCell({ width, type, data, setData, el, ind, tableType }) {

    const [isEditing, setIsEditing] = useState(
        {
            title: false,
            shortTitle: false,
            text1: false,
            text2: false,
            notes: false,
        }
    );

    const [isChanged, setIsChanged] = useState(false);
    const [editedText, setEditedText] = useState('');

    function handleClick(e) {
        if (el.isNew) {
            handleDoubleClick(e)
        }
    }

    function handleDoubleClick(e) {
        const updatedIsEditing = [isEditing];
        updatedIsEditing[type] = true;

        setIsEditing(updatedIsEditing);
        setEditedText(data[ind][type]);
    };

    function handleChange(e) {
        if (((type === 'price') || (type === 'basePrice') || (type === 'width') || (type === 'weight') || (type === 'maxCount') || (type === 'multiplier') || (type === 'mistakesCount')) && isNaN(Number(e.target.value))) {
            return;
        }

        setIsChanged(true);
        setEditedText(e.target.value);
    };

    function handleBlur(e) {
        if (isChanged) {
            let newValue = editedText;

            if ((type === 'price') || (type === 'basePrice') || (type === 'maxCount') || (type === 'mistakesCount') || (type === 'multiplier')) {
                newValue = parseInt(editedText)
            }
            if ((type === 'width') || (type === 'weight')) {
                newValue = parseFloat(e.target.value)
            }

            const updatedData = [...data];
            updatedData[ind][type] = newValue;

            if (!el.isNew) {
                const postData = {
                    tableType: tableType,
                    id: el.id,
                    updatedFields: {
                        [type]: newValue
                    }
                };

                if (getCookie('authorization')) {
                    fetch(`${process.env.REACT_APP_URL}/admin/${getTableEndpoint(tableType)}`, {
                        method: 'PATCH',
                        headers: {
                            Authorization: `Bearer ${getCookie('authorization')}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(postData)
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error("Ошибка запроса");
                            }
                            return response.json();
                        })
                        .then(data => {

                        })
                        .catch(error => {
                            console.error("Ошибка при обработке ответа:", error);
                        });
                }
            }
        }

        const updatedIsEditing = [isEditing];
        updatedIsEditing[type] = false;

        setIsEditing(updatedIsEditing);
        setIsChanged(false);
    };

    return (
        <td style={{ width }} onDoubleClick={handleDoubleClick} onClick={handleClick}>
            {isEditing[type] ? (
                <input
                    className="adminTableInput"
                    type="text"
                    value={editedText}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                el[type]
            )}
        </td>
    )
}