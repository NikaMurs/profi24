
export default function AddNewProductButton({ isAddingNewProduct, setIsAddingNewProduct, data, setData }) {
    function handleAddNewProduct() {
        const newProduct = {
            isNew: true,
            isActive: false,
        };



        if (!isAddingNewProduct) {
            setIsAddingNewProduct(true)
            if (data) {
                setData(prevData => {
                    return [...prevData, newProduct];
                });
            } else {
                setData([newProduct]);
            }
        }
    }

    return (
        <button
            onClick={handleAddNewProduct}
            className="tableButton tableButton_greenPlus"
            style={{ backgroundColor: '#ECECEC' }} />
    )
}