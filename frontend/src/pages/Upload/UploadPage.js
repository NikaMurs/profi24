import { useEffect, useState } from 'react';
import './uploadPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import EXIF from 'exif-js';


export default function UploadPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const parameters = location.state;

    const [images, setImages] = useState([]);


    const handleFileChange = (event) => {

        const files = event.target.files;
        const fileArray = Array.from(files);

        const imagePromises = fileArray.map((file) => {
            return new Promise((resolve, reject) => {
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        img.src = e.target.result;
                        img.onload = () => {
                            const width = img.width;
                            const height = img.height;
                            console.log(`Width: ${width}px, Height: ${height}px`);
                            EXIF.getData(img, function () {
                                const dpiX = EXIF.getTag(this, 'XResolution');
                                const dpiY = EXIF.getTag(this, 'YResolution');
                                const colorSpace = EXIF.getTag(this, 'ColorSpace');
                                console.log(`DPI: ${dpiX}x${dpiY}`);
                                console.log(`Color Space: ${colorSpace}`);
                            });

                            resolve({ src: img.src, name: file.name });
                        };
                    };
                    reader.readAsDataURL(file);
                } else {
                    reject(new Error('File is not an image'));
                }
            });
        });

        Promise.all(imagePromises)
            .then((results) => {
                setImages((prevImages) => [...prevImages, ...results]);
            })
            .catch((error) => {
                console.error('Error processing images:', error);
            });
    };


    useEffect(() => {
        console.log(parameters)
    }, [])


    return (
        <>
            <input type="hidden" id="uid" value="2" name="uid" />
            <input type="hidden" id="forr" value="18" name="foor" />
            <input type="hidden" id="pap" value="6" name="pap" />
            <input type="hidden" id="bas" value="14" name="bas" />
            <input type="hidden" id="tco" value="12" name="tco" />
            <input type="hidden" id="var01" value="5" name="var01" />
            <input type="hidden" id="c_raz" value="1" name="c_raz" />
            <input type="hidden" id="c_b" value="1" name="c_b" />
            <input type="hidden" id="pid" value="22" name="pid" />


            <div id="over"></div>
            {/* <div id="upload_que">

                <span>Загружено <span id="cf"></span> файлов.</span><br /><br />

                <div className="butons">
                    <a onclick="add_files2();" href="#"> Обработать и сохранить.</a>
                </div>
                <div className="butons">
                    <a href="del_foto.php?gid="> Отменить.</a>
                </div>
            </div> */}

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
                                    <li>Проверить цветовой режим. Он должен быть RGB (не CMYK);</li>
                                    <li>Размер обложки в пикселях: {parameters.coverSize}</li>
                                    <li>Размер книги в пикселях: {parameters.blockSize}</li>
                                    <li>Допускается отклонение +/- 2 пикселя.</li>
                                </ol>
                            </div>
                            <div className="uploadCardContentLeftFooter">
                                <button className="uploadCardContentButton">Загрузить</button>
                                <button className="uploadCardContentButton" onClick={() => { navigate(-1) }}>Назад</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="file" accept="image/*" multiple onChange={handleFileChange} />



            {/* <table id="out_table" style={{ fontSize: '12px' }}>
                <tbody id="out_table">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '40px' }}>1</td>
                        <td style={{ width: '220px' }}>Имя</td>
                        <td style={{ width: '100px' }}>Размер загруженного файла</td>
                        <td style={{ width: '100px' }}>Целевой размер разворота</td>
                        <td style={{ width: '100px' }}>Целевой размер обложки</td>
                        <td style={{ width: '100px' }}>Разрешение(300 PPI)</td>
                        <td style={{ width: '70px' }}>Цветовая схема</td>
                        <td style={{ width: '50px' }}>Статус</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}