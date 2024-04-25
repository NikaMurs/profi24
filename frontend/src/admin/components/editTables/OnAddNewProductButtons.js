import fetchTest from "../../../functions/fetchTest";
import getCookie from "../../../functions/getCookie";
import { useSelector } from 'react-redux'

export default function OnAddNewProductButtons({ isAddingNewProduct, setIsAddingNewProduct, data, setData, tableType }) {
    const user = useSelector((state) => state.user)

    function handlerSaveNewProduct() {
        setIsAddingNewProduct(false)
        const updatedData = [...data];
        delete updatedData[updatedData.length - 1].isNew;
        setData(updatedData)

        let postData;
        switch (tableType) {
            case ('pro'):
                postData = {
                    tableType: tableType,
                    newProduct: updatedData[updatedData.length - 1]
                };
                break;
            default:
                updatedData[updatedData.length - 1].pro_id = user.selectedPro;
                postData = {
                    tableType: tableType,
                    newProduct: updatedData[updatedData.length - 1]
                };
        }


        if (getCookie('authorization')) {
            fetchTest();
            fetch(`${process.env.REACT_APP_URL}/admin/management`, {
                method: 'POST',
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
                .then(dataa => {
                    const updatedData = [...data];
                    (updatedData[updatedData.length - 1].id = dataa.id);
                    setData(updatedData);
                })
                .catch(error => {
                    console.error("Ошибка при обработке ответа:", error);
                });
        }
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