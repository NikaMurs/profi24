
export default function ChangeIsActive({ el, ind, data, setData, tableType }) {

    function handlerChangeIsActive() {
        const updatedData = [...data];
        updatedData[ind].isActive = !updatedData[ind].isActive;

        setData(updatedData)

        if (!el.isNew) {
            const postData = {
                tableType: tableType,
                productId: el.id,
                isActive: updatedData[ind].isActive
            };
            console.log(postData) //Отправить пост запрос (тип таблицы (tableType) -> айди продукта(el.id) -> isActive -> новое значение) (если el.isNew === false)
        }
    }

    return (
        <button
            className={el.isActive ? 'tableButton tableButton_greenButton' : 'tableButton tableButton_redButton'}
            onClick={handlerChangeIsActive} />

    )
}