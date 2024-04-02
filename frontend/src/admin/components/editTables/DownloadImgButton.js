import React from 'react';

export default function DownloadImgButton({ el, ind, imgType, data, setData, tableType }) {

    function handleDownloadImg() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', handleFileSelect);
        fileInput.click();
    }

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        const postData = {
            tableType: tableType,
            productId: el.id,
            [imgType]: formData,
        };

        console.log(postData) // Отправить пост запрос (тип таблицы (tableType) -> айди продукта(el.id) -> url

        const updatedData = [...data];
        updatedData[ind][imgType] = 'url...'
        setData(updatedData)
    }

    return (
        <>
            <button className={((el[imgType] === '') || el[imgType] === undefined) ? 'tableButton tableButton_greyDowland' : 'tableButton tableButton_greenCheck'} onClick={handleDownloadImg} />
        </>
    );
}
