
export default function AddNewProductButton({ isAddingNewProduct, setIsAddingNewProduct, data, setData }) {
    function handleAddNewProduct() {

        const newProduct = {
            isNew: true,
            isActive: false,
            title: "",
            shortTitle: "",
            id: data && data.length ? data[data.length - 1].id + 1 : 1,
            img: "",
            text1: "",
            text2: "",
            text3: "",
            notes: ""
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