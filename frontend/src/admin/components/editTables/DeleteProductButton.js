import fetchTest from "../../../functions/fetchTest";
import getCookie from "../../../functions/getCookie";

export default function DeleteProductButton({ selectedProduct, setSelectedProduct, data, setData, tableType }) {

    function handleDeleteProduct() {
        if (selectedProduct) {
            const updatedData = [...data];

            for (let i = 0; i < updatedData.length; i++) {
                if (updatedData[i].id === selectedProduct) {
                    const postData = {
                        tableType: tableType,
                        id: selectedProduct
                    };

                    if (getCookie('authorization')) {
                        fetchTest();
                        fetch(`${process.env.REACT_APP_URL}/admin/management`, {
                            method: 'DELETE',
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
                                updatedData.splice(i, 1);
                                setData(updatedData);
                                setSelectedProduct(null)
                            })
                            .catch(error => {
                                console.error("Ошибка при обработке ответа:", error);
                            });
                    }
                    break;
                }
            }
        }
    }

    return (
        <button
            onClick={handleDeleteProduct}
            className="tableButton tableButton_redTrash"
            style={{ backgroundColor: '#ECECEC' }} />
    )
}