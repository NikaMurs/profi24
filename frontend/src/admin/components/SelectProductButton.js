
export default function SelectProductButton({ el, selectedProduct, setSelectedProduct }) {

    function handleSelectRow(e) {
        if (!el.isNew) {
            const buttons = e.currentTarget.closest("tbody").querySelectorAll('.tableButton');
            buttons.forEach(button => button.classList.remove('tableButton_blueCheck'));
            e.currentTarget.classList.add('tableButton_blueCheck');
            setSelectedProduct(el.id);
        }
    }

    return (
        <button
            onClick={handleSelectRow}
            className={selectedProduct === el.id ? 'tableButton tableButton_blueCheck' : 'tableButton'}
        />
    )
}