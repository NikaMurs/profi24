import './modal.css'

export default function Modal({ closeModal, showModal }) {
    function handleClose() {
        closeModal();
    };

    function handleButtonClick() {
        handleClose();
    };

    return (
        <div className="modal_overlay" onClick={handleClose}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <h2>Скачать направляющие</h2>
                <p>{`для ${showModal.title}`}</p>
                <div className="modal_buttonContainer">
                    <a href={showModal.urlJpeg} download target="_blank" onClick={handleButtonClick} rel="noreferrer">Jpeg</a>
                    <a href={showModal.urlPsd} download target="_blank" onClick={handleButtonClick} rel="noreferrer">Psd</a>
                    <a href={showModal.urlIndd} download target="_blank"  onClick={handleButtonClick} rel="noreferrer">Indd</a>
                </div>
            </div>
        </div>
    );
}