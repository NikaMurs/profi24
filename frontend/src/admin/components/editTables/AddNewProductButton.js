
export default function AddNewProductButton({ isAddingNewProduct, setIsAddingNewProduct, data, setData }) {
    function handleAddNewProduct() {

        const newProduct = {
            isNew: true,
            isActive: false,
        };


        if (!isAddingNewProduct) {
            setIsAddingNewProduct(true)
            setData(prevData => {
                return [...prevData, newProduct];
            });
        }


    }

    return (
        <button
            onClick={handleAddNewProduct}
            className="tableButton tableButton_greenPlus"
            style={{ backgroundColor: '#ECECEC' }} />
    )
}