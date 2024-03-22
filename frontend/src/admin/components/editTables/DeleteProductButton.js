
export default function DeleteProductButton({selectedProduct, setSelectedProduct, data, setData, tableType}) {

    function handleDeleteProduct() {
        if (selectedProduct) {
            const updatedData = [...data];

            for (let i = 0; i < updatedData.length; i++) {
                if (updatedData[i].id === selectedProduct) {
                    updatedData.splice(i, 1);
                    setData(updatedData);
                    const postData = {
                        tableType: tableType,
                        deleteProduct: selectedProduct
                    };
                    console.log(postData) //Отправить пост запрос (тип таблицы (tableType) -> всю инфу о последнем элементе data)
                    setSelectedProduct(null)
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