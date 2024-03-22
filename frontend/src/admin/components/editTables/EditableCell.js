import { useState } from "react";


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
        setIsChanged(true);
        setEditedText(e.target.value);
    };

    function handleBlur(e) {
        if (isChanged) {
            const updatedData = [...data];
            updatedData[ind][type] = editedText;

            setData(updatedData)
            //Отправить постзапрос (тип таблицы (tableType) -> айди продукта(el.id -> fieldType -> новое значение) (если el.isNew === false)

            if (!el.isNew) {
                const postData = {
                    tableType: tableType,
                    productId: el.id,
                    [type]: editedText
                };
                console.log(postData)
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