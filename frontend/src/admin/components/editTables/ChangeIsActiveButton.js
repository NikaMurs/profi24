import getCookie from "../../../functions/getCookie";
import getTableEndpoint from "../../functions/getTableEndpoint";

export default function ChangeIsActive({ el, ind, data, setData, tableType }) {

    function handlerChangeIsActive() {
        const updatedData = [...data];
        updatedData[ind].isActive = !updatedData[ind].isActive;

        setData(updatedData)

        if (!el.isNew) {
            const postData = {
                tableType: tableType,
                id: el.id,
                updatedFields: {
                    isActive: updatedData[ind].isActive
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

    return (
        <button
            className={el.isActive ? 'tableButton tableButton_greenButton' : 'tableButton tableButton_redButton'}
            onClick={handlerChangeIsActive} />

    )
}