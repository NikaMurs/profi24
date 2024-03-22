import { useState } from "react";


export default function EditableCell({ width, type, data, setData, el, ind }) {
    const [isEditing, setIsEditing] = useState(
        {
            title: false,
            shortTitle: false,
            id: false,
            text1: false,
            text2: false,
            notes: false,
        }
    );

    const [isChanged, setIsChanged] = useState(false);
    const [editedText, setEditedText] = useState('');

    const handleDoubleClick = (e) => {
        const fieldType = e.target.id.split('_')[1];

        const updatedIsEditing = [isEditing];
        updatedIsEditing[fieldType] = true;

        setIsEditing(updatedIsEditing);
        setEditedText(data[ind][fieldType]);
    };

    const handleChange = (e) => {
        setIsChanged(true);
        setEditedText(e.target.value);
    };

    const handleChangeId = (e) => {
        setIsChanged(true);
        const regex = /^[0-9]*$/;
        if (regex.test(e.target.value)) {
            setEditedText(e.target.value);
        }
    };

    const handleBlur = (e) => {
        const fieldType = e.target.parentNode.id.split('_')[1];

        if (isChanged) {
            const updatedData = [...data];
            updatedData[ind][fieldType] = editedText;

            setData(updatedData)
            //Отправить постзапрос (айди продукта(e.target.parentNode.id.split('_')[0]) -> fieldType -> новое значение)
        }

        const updatedIsEditing = [isEditing];
        updatedIsEditing[fieldType] = false;

        setIsEditing(updatedIsEditing);
        setIsChanged(false);
    };

    return (
        <td style={{ width }} id={`${el.id}_${type}`} onDoubleClick={handleDoubleClick}>
            {isEditing[type] ? (
                <input
                    className="adminTableInput"
                    type="text"
                    value={editedText}
                    onChange={type !== 'id' ? handleChange : handleChangeId}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                el[type]
            )}
        </td>
    )
}