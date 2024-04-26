import React from 'react';
import getCookie from '../../../functions/getCookie';
import fetchTest from '../../../functions/fetchTest';
import getTableEndpoint from '../../functions/getTableEndpoint';

export default function DownloadImgButton({ el, ind, imgType, data, setData, tableType }) {

    function handleDownloadImg() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', handleFileSelect);
        fileInput.click();
    }

    function handleFileSelect(event) {
        const updatedData = [...data];

        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('img', file);


        if (getCookie('authorization')) {
            fetchTest();
            fetch(`${process.env.REACT_APP_URL}/admin/${getTableEndpoint(tableType)}/upload_photo/?tableType=${tableType}&id=${el.id}&tableName=${imgType}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${getCookie('authorization')}`,
                },
                body: formData
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Ошибка запроса");
                    }
                    return response.json();
                })
                .then(data => {
                    updatedData[ind][imgType] = data.url
                    console.log(updatedData[ind])
                    console.log(imgType)
                    setData(updatedData)
                })
                .catch(error => {
                    console.error("Ошибка при обработке ответа:", error);
                });
        }
    }

    return (
        <>
            <button className={((el[imgType] === '') || el[imgType] === undefined) ? 'tableButton tableButton_greyDowland' : 'tableButton tableButton_greenCheck'} onClick={handleDownloadImg} />
        </>
    );
}
