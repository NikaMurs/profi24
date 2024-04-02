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
                    <a href={showModal.urlJpeg} onClick={handleButtonClick}>Jpeg</a>
                    <a href={showModal.urlPsd} onClick={handleButtonClick}>Psd</a>
                    <a href={showModal.urlIndd} onClick={handleButtonClick}>Indd</a>
                </div>
            </div>
        </div>
    );
}