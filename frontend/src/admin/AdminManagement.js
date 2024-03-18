import { useEffect, useMemo, useState } from 'react'
import './style.css'
import Header from './components/Header'
import TableFor from './managmentTables/TableFor'
import TablePap from './managmentTables/TablePap'
import TableBas from './managmentTables/TableBas'
import TableTco from './managmentTables/TableTco'
import TableVar from './managmentTables/TableVar'
import TableNco from './managmentTables/TableNco'


export default function AdminManagement() {
    const [data, setData] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [productInfo, setProductInfo] = useState(null);

    function handleButtonClick(e) {
        const buttons = e.currentTarget.closest("tbody").querySelectorAll('.tableButton');
        buttons.forEach(button => button.classList.remove('tableButton_blueCheck'));
        e.currentTarget.classList.add('tableButton_blueCheck');
        setSelectedProduct(e.currentTarget.id);
    }

    useEffect(() => {
        if (selectedProduct !== null) {
            fetch(`/localFetch/adminProductInfo${selectedProduct}.json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Ошибка запроса");
                    }
                    return response.json();
                })
                .then(data => {
                    setProductInfo(data);
                })
                .catch(error => {
                    console.error("Ошибка при обработке ответа:", error);
                });
        }
    }, [selectedProduct])

    useEffect(() => {
        fetch("/localFetch/adminProductList.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка запроса");
                }
                return response.json();
            })
            .then(data => {
                setData(data.products);
            })
            .catch(error => {
                console.error("Ошибка при обработке ответа:", error);
            });
    }, [])

    function TableRow({ el, ind }) {
        return (
            <>
                <tr>
                    <td style={{ width: '30px' }}>
                        <button
                            onClick={handleButtonClick}
                            className="tableButton"
                            id={el.id} />
                    </td>
                    <td style={{ width: '30px' }}>{ind + 1}</td>
                    <td style={{ width: '30px' }}>
                        <button className={el.isActive ? 'tableButton tableButton_greenButton' : 'tableButton tableButton_redButton'} />
                    </td>
                    <td style={{ width: '300px' }}>{el.title}</td>
                    <td style={{ width: '100px' }}>{el.shortTitle}</td>
                    <td style={{ width: '50px' }}>{el.id}</td>
                    <td style={{ width: '60px' }}>
                        <button className={el.img === '' ? 'tableButton tableButton_greyDowland' : 'tableButton tableButton_greenCheck'} />
                    </td>
                    <td style={{ width: '120px' }}>{el.text1}</td>
                    <td style={{ width: '120px' }}>{el.text2}</td>
                    <td style={{ width: '120px' }}>{el.text3}</td>
                    <td style={{ width: '240px' }}>{el.notes}</td>
                </tr>
            </>
        )
    }

    return (
        <>
            <Header />
            <div id="table1">
                <h3 className="tablesTitle">Продукты (PRO)</h3>
                <table id="table_pro">
                    <tbody id="pro_tbody">
                        <tr style={{ backgroundColor: '#ECECEC' }}>
                            <td style={{ width: '30px' }}>
                                <button
                                    className="tableButton tableButton_greenPlus"
                                    style={{ backgroundColor: '#ECECEC' }}>
                                </button>
                            </td>
                            <td style={{ width: '30px' }}>
                                <button
                                    className="tableButton tableButton_redTrash"
                                    style={{ backgroundColor: '#ECECEC' }}>
                                </button>
                            </td>
                            <td style={{ width: '30px' }}>Вкл</td>
                            <td style={{ width: '300px' }}>Имя</td>
                            <td style={{ width: '100px' }}>Имя крат.</td>
                            <td style={{ width: '50px' }}>Арт</td>
                            <td style={{ width: '60px' }}>IMG</td>
                            <td style={{ width: '120px' }}>Текст 1</td>
                            <td style={{ width: '120px' }}>Текст 2</td>
                            <td style={{ width: '120px' }}>Текст 3</td>
                            <td style={{ width: '240px' }}>Прим.</td>
                        </tr>
                        {useMemo(() => {
                            return data?.map((el, ind) => {
                                return <TableRow el={el} ind={ind} key={`pro_${el.id}`} />
                            })
                        }, [data])}

                    </tbody>
                </table>
            </div >


            {productInfo === null ? <></> :
                <>
                    <h2 className="mainTitle">{productInfo.title}</h2>

                    <TableFor data={productInfo.for} />
                    <TablePap data={productInfo.pap} />
                    <TableBas data={productInfo.bas} />
                    <TableTco data={productInfo.tco} />
                    <TableVar data={productInfo.var} />
                    {/* <TableDop data={productInfo.dop}/> */}
                    <TableNco data={productInfo.nco} />
                </>}

        </>
    )
}