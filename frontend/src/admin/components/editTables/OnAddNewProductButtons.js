
export default function OnAddNewProductButtons({ isAddingNewProduct, setIsAddingNewProduct, data, setData, tableType }) {

    function handlerSaveNewProduct() {
        setIsAddingNewProduct(false)
        const updatedData = [...data];
        delete updatedData[updatedData.length - 1].isNew;
        setData(updatedData)

        const postData = {
            tableType: tableType,
            newProduct: updatedData[updatedData.length - 1]
        };
        console.log(postData) //Отправить пост запрос (тип таблицы (tableType) -> всю инфу о последнем элементе data)
    }

    function handlerCancelNewProduct() {
        const updatedData = [...data];
        updatedData.pop();
        setData(updatedData)

        setIsAddingNewProduct(false)
    }

    return (
        <>
            {isAddingNewProduct ?
                <>
                    <button className='addNewProductButton' onClick={handlerSaveNewProduct}>Сохранить</button>
                    <button className='addNewProductButton' onClick={handlerCancelNewProduct}>Отмена</button>
                </>
                : <></>}
        </>
    )
}