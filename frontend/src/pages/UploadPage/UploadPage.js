import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import EXIF from 'exif-js';
import './uploadPage.css';
import { validate } from 'uuid';

export default function UploadPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const parameters = location.state;
    const user = useSelector((state) => state.user);
    const userId = user.id;

    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [progress, setProgress] = useState(0);
    const [validateFinished, setValidationFinished] = useState(false);
    const [error, setError] = useState([]);
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        if (validateFinished) {
            setError([]);
            let flag = true;
            let blockCount = 0;
            let coverCount = 0;
            images.forEach((el) => {
                const isDpiValid = el.dpiX === '300';
                const isColorSpaceValid = el.colorSpace === 'sRGB';
                const isSizeValid =
                    checkSize(el.dimensions, parameters.blockSize) ||
                    checkSize(el.dimensions, parameters.coverSize);
                if (checkSize(el.dimensions, parameters.blockSize)) {
                    blockCount++;
                }
                if (checkSize(el.dimensions, parameters.coverSize)) {
                    coverCount++;
                }
                if (!(isDpiValid && isColorSpaceValid && isSizeValid)) {
                    flag = false;
                }
            });

            if (!flag) {
                setError((prevErrors) => [...prevErrors, 'Неправильные параметры изображений']);
                setErrorModalVisible(true);
            }

            if (blockCount !== ((parameters.cnt.numberOfSpreads - 1) * parameters.cnt.numberOfBooks)) {
                setError((prevErrors) => [...prevErrors, `Загружено разворотов: ${blockCount} | Ожидалось: ${(parameters.cnt.numberOfSpreads) * parameters.cnt.numberOfBooks}`]);
                setErrorModalVisible(true);
            }

            if (coverCount !== parameters.cnt.numberOfBooks) {
                setError((prevErrors) => [...prevErrors, `Загружено обложек: ${coverCount} | Ожидалось: ${parameters.cnt.numberOfBooks}`]);
                setErrorModalVisible(true);
            }

            //ЕСЛИ НИКАКИХ ОШИБОК НЕТ, ТО НАЧАТЬ ЗАГРУЗКУ НА СЕРВЕР
        }
    }, [validateFinished]);

    const handleFileChange = async (event) => {
        setShowModal(true);
        setProgress(0);
        setImages([]);
        setValidationFinished(false);
        const files = event.target.files;
        const fileArray = Array.from(files);
        const totalFiles = fileArray.length;

        for (let i = 0; i < totalFiles; i += 10) {
            const fileChunk = fileArray.slice(i, i + 10);
            await processFileChunk(fileChunk);
            setProgress(((i + fileChunk.length) / totalFiles) * 100);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        setShowModal(false);
        setValidationFinished(true);
    };

    const processFileChunk = (fileChunk) => {
        const imagePromises = fileChunk.map((file) => {
            return new Promise((resolve, reject) => {
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        img.src = e.target.result;
                        img.onload = () => {
                            const width = img.width;
                            const height = img.height;
                            let dpiX = '0';
                            let colorSpace = '0';

                            EXIF.getData(img, function () {
                                const exifDpiX = EXIF.getTag(this, 'XResolution');
                                const exifColorSpace = EXIF.getTag(this, 'ColorSpace');
                                if (exifDpiX) {
                                    dpiX = exifDpiX.toString();
                                }
                                if (exifColorSpace) {
                                    colorSpace = exifColorSpace === 1 ? 'sRGB' : 'Uncalibrated';
                                }
                            });

                            resolve({
                                src: img.src,
                                name: file.name,
                                dimensions: `${width}x${height}`,
                                dpiX,
                                colorSpace,
                            });
                        };
                    };
                    reader.readAsDataURL(file);
                } else {
                    reject(new Error('File is not an image'));
                }
            });
        });

        return Promise.all(imagePromises)
            .then((results) => {
                setImages((prevImages) => [...prevImages, ...results]);
            })
            .catch((error) => {
                console.error('Error processing images:', error);
            });
    };

    useEffect(() => {
        console.log(parameters);
    }, [parameters]);

    const checkSize = (dimensions, targetSize) => {
        const [width, height] = dimensions.split('x').map(Number);
        const [targetWidth, targetHeight] = targetSize.split('x').map(Number);

        return (
            (Math.abs(width - targetWidth) <= 2 && Math.abs(height - targetHeight) <= 2) ||
            (Math.abs(width - targetHeight) <= 2 && Math.abs(height - targetWidth) <= 2)
        );
    };

    const TableRow = ({ el, ind }) => {
        const getDpiCheck = (dpiX) => {
            return dpiX === '300' ? '✓' : '✗';
        };

        const getColorSpaceCheck = (colorSpace) => {
            return colorSpace === 'sRGB' ? '✓' : '✗';
        };

        const isDpiValid = el.dpiX === '300';
        const isColorSpaceValid = el.colorSpace === 'sRGB';
        const isSizeValid =
            checkSize(el.dimensions, parameters.blockSize) ||
            checkSize(el.dimensions, parameters.coverSize);

        const getCellStyle = (isValid) => {
            return { color: isValid ? 'green' : 'red', fontWeight: 700 };
        };

        return (
            <tr style={{ backgroundColor: isDpiValid && isColorSpaceValid && isSizeValid ? '#c8e6c9' : '#ffcdd2' }}>
                <td style={{ width: '40px' }}>{ind + 1}</td>
                <td style={{ width: '220px' }}>{el.name}</td>
                <td style={{ width: '100px' }}>{parameters.blockSize}</td>
                <td style={{ width: '100px' }}>{parameters.coverSize}</td>
                <td style={{ width: '100px' }}>{el.dimensions}</td>
                <td style={getCellStyle(isDpiValid)}>{getDpiCheck(el.dpiX)}</td>
                <td style={getCellStyle(isColorSpaceValid)}>{getColorSpaceCheck(el.colorSpace)}</td>
            </tr>
        );
    };

    const ErrorModal = ({ errorMessage, onClose }) => {
        return (
            <div className="errorModal_overlay" onClick={onClose}>
                <div className="errorModal" onClick={(e) => e.stopPropagation()}>
                    <button className="modalCloseButton" onClick={onClose}>
                        &times;
                    </button>
                    <div className="errorModalContent">
                        <h2>Ошибка</h2>
                        {errorMessage.map((el) => {
                            return <p>{el}</p>
                        })}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div id="over"></div>
            <div className="uploadWrapper">
                <div className="uploadCard">
                    <div className="uploadCardTitle">
                        <h1>Загрузка</h1>
                    </div>
                    <div className="uploadCardContent">
                        <div className="uploadCardContentLeft">
                            <div className="uploadCardContentLeftText">
                                <h2>Важная информация!</h2>
                                <p>Для максимального ускорения и облегчения загрузки Ваших макетов на сайт, просьба перед
                                    загрузкой проверить следующие параметры файлов:</p>
                                <ol>
                                    <li>Проверить разрешение файла. Оно должно быть 300 dpi;</li>
                                    <li>Проверить цветовой профиль. Он должен быть sRGB (не CMYK);</li>
                                    <li>Размер обложки в пикселях: {parameters.coverSize}</li>
                                    <li>Размер книги в пикселях: {parameters.blockSize}</li>
                                    <li>Допускается отклонение +/- 2 пикселя.</li>
                                </ol>
                            </div>
                            <div className="uploadCardContentLeftFooter">
                                <button className="uploadCardContentButton" onClick={handleUploadButtonClick}>Загрузить</button>
                                <button className="uploadCardContentButton" onClick={() => { navigate(-1) }}>Назад</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input className="hide" type="file" accept="image/*" multiple ref={fileInputRef} onChange={handleFileChange} />

            {showModal && (
                <div className='uploadModal_overlay'>
                    <div className="uploadModal">
                        <div className="uploadModalContent">
                            <h2>Идет проверка файлов...</h2>
                            <progress value={progress} max="100" />
                        </div>
                    </div>
                </div>
            )}

            {errorModalVisible && <ErrorModal errorMessage={error} onClose={() => setErrorModalVisible(false)} />}

            {error.length !== 0 ?
                <table id="out_table" style={{ fontSize: '12px' }}>
                    <tbody id="out_table">
                        <tr style={{ backgroundColor: '#ECECEC' }}>
                            <td style={{ width: '40px' }}>№</td>
                            <td style={{ width: '220px' }}>Имя</td>
                            <td style={{ width: '100px' }}>Целевой размер разворота</td>
                            <td style={{ width: '100px' }}>Целевой размер обложки</td>
                            <td style={{ width: '100px' }}>Размер загруженного файла</td>
                            <td style={{ width: '100px' }}>Разрешение(300 DPI)</td>
                            <td style={{ width: '70px' }}>Цветовой профиль</td>
                        </tr>
                        {images.map((el, ind) => (
                            <TableRow el={el} ind={ind} key={ind} />
                        ))}
                    </tbody>
                </table>
                :
                <></>}
        </>
    );
}
