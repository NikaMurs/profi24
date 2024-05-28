import FileSaver from 'file-saver';
import './modal.css'

export default function Modal({ closeModal, showModal }) {
    function handleClose() {
        closeModal();
    };

    function handleButtonClick(url, type) {
        handleClose();
        FileSaver.saveAs(url, `Направляющие.${type}`);
    };

    return (
        <div className="modal_overlay" onClick={handleClose}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <h2>Скачать направляющие</h2>
                <p>{`для ${showModal.title}`}</p>
                <div className="modal_buttonContainer">
                    <div onClick={()=>{handleButtonClick(showModal.urlJpeg, 'jpg')}}>Jpeg</div>
                    <div onClick={()=>{handleButtonClick(showModal.urlPsd, 'psd')}}>Psd</div>
                    <div onClick={()=>{handleButtonClick(showModal.urlIndd, 'indd')}}>Indd</div>
                </div>
            </div>
        </div>
    );
}