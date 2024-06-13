import { useEffect, useMemo, useState } from 'react'
import '../style.css'
import Header from '../components/Header'
import TableFor from '../managmentTables/TableFor'
import TablePap from '../managmentTables/TablePap'
import TableBas from '../managmentTables/TableBas'
import TableTco from '../managmentTables/TableTco'
import TableVar from '../managmentTables/TableVar'
import TableNco from '../managmentTables/TableNco'

import EditableCell from '../components/editTables/EditableCell'
import AddNewProductButton from '../components/editTables/AddNewProductButton'
import SelectProductButton from '../components/SelectProductButton'
import ChangeIsActive from '../components/editTables/ChangeIsActiveButton'
import OnAddNewProductButtons from '../components/editTables/OnAddNewProductButtons'
import DeleteProductButton from '../components/editTables/DeleteProductButton'
import DownloadImgButton from '../components/editTables/DownloadImgButton'
import getCookie from '../../functions/getCookie'
import { useDispatch } from 'react-redux'
import { userActions } from '../../redux/userReducer'


export default function AdminManagement() {
    const dispatch = useDispatch();
    const tableType = 'pro';

    const [data, setData] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [productInfo, setProductInfo] = useState(null);

    const [isAddingNewProduct, setIsAddingNewProduct] = useState(false)

    useEffect(() => {
        if (getCookie('authorization')) {
            fetch(`${process.env.REACT_APP_URL}/admin/management/adminProductList`, {
                headers: {
                    Authorization: `Bearer ${getCookie('authorization')}`
                }
            })
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
        }
    }, [])

    useEffect(() => {
        if (selectedProduct !== null) {
            dispatch(userActions.setAdminSelectedPro(selectedProduct))
            fetch(`${process.env.REACT_APP_URL}/admin/management/adminProductInfo?id=${selectedProduct}`, {
                headers: {
                    Authorization: `Bearer ${getCookie('authorization')}`
                }
            })
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

    function TableRow({ el, ind }) {

        return (
            <>
                <tr style={el.isNew ? { border: '3px solid #66CC33' } : {}}>
                    <td style={{ width: '30px' }}>
                        <SelectProductButton el={el} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                    </td>
                    <td style={{ width: '30px' }}>{ind + 1}</td>
                    <td style={{ width: '30px' }}>
                        <ChangeIsActive el={el} ind={ind} data={data} setData={setData} tableType={tableType} />
                    </td>

                    <EditableCell width={'300px'} type={'title'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                    <EditableCell width={'100px'} type={'shortTitle'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />

                    <td style={{ width: '30px' }}>{el.id}</td>
                    <td style={{ width: '60px' }}>
                        <DownloadImgButton el={el} imgType='img' ind={ind} data={data} setData={setData} tableType={tableType} />
                    </td>

                    <EditableCell width={'120px'} type={'text1'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                    <EditableCell width={'120px'} type={'text2'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                    <EditableCell width={'120px'} type={'text3'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                    <EditableCell width={'240px'} type={'notes'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                </tr>
            </>
        )
    }



    return (
        <>
            <Header />
            <div className='wrapper_1200'>
                <div id="table1">
                    <h3 className="tablesTitle">Продукты (PRO)</h3>
                    <table id="table_pro">
                        <tbody id="pro_tbody">
                            <tr style={{ backgroundColor: '#ECECEC' }}>
                                <td style={{ width: '30px' }}>
                                    <AddNewProductButton isAddingNewProduct={isAddingNewProduct} setIsAddingNewProduct={setIsAddingNewProduct} data={data} setData={setData} />
                                </td>
                                <td style={{ width: '30px' }}>
                                    <DeleteProductButton selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} data={data} setData={setData} tableType={tableType} />
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
                    <OnAddNewProductButtons isAddingNewProduct={isAddingNewProduct} setIsAddingNewProduct={setIsAddingNewProduct} data={data} setData={setData} tableType={tableType} />
                </div >


                {productInfo === null ? <></> :
                    <>
                        <h2 className="mainTitle">{productInfo.title}</h2>
                        <TableFor productInfo={productInfo} />
                        <TablePap productInfo={productInfo} />
                        <TableBas productInfo={productInfo} />
                        <TableTco productInfo={productInfo} />
                        <TableVar productInfo={productInfo} />
                        <TableNco productInfo={productInfo} />
                    </>}
            </div>
        </>
    )
}