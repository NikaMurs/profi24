import { useEffect, useState } from 'react';
import '../style.css'
import SelectProductButton from '../components/SelectProductButton';
import ChangeIsActive from '../components/editTables/ChangeIsActiveButton';
import EditableCell from '../components/editTables/EditableCell';
import AddNewProductButton from '../components/editTables/AddNewProductButton';
import DeleteProductButton from '../components/editTables/DeleteProductButton';
import OnAddNewProductButtons from '../components/editTables/OnAddNewProductButtons';
import DownloadImgButton from '../components/editTables/DownloadImgButton';

export default function TableNco({ productInfo }) {
    const tableType = 'nco';
    const [data, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isAddingNewProduct, setIsAddingNewProduct] = useState(false);

    useEffect(() => {
        setData(productInfo[tableType])
    }, [productInfo])

    function TableRow({ el, ind }) {
        return (
            <tr style={el.isNew ? { border: '3px solid #66CC33' } : {}}>
                <td style={{ width: '30px' }}>
                    <SelectProductButton el={el} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                </td>
                <td style={{ width: '30px' }}>{ind + 1}</td>
                <td style={{ width: '30px' }}>
                    <ChangeIsActive el={el} ind={ind} data={data} setData={setData} tableType={tableType} />
                </td>
                <td style={{ width: '30px' }}>{el.id}</td>

                <EditableCell width={'80px'} type={'format'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'60px'} type={'width'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'110px'} type={'size'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'70px'} type={'weight'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <td style={{ width: '30px' }}>
                    {/* ПОМЕНЯТЬ ЭТУ ХУЙНЮ! */}
                    <DownloadImgButton el={el} imgType='guides_jpeg' ind={ind} data={data} setData={setData} tableType={tableType} />
                </td>
                <td style={{ width: '30px' }}>
                    {/* ПОМЕНЯТЬ ЭТУ ХУЙНЮ! */}
                    <DownloadImgButton el={el} imgType='guides_psd' ind={ind} data={data} setData={setData} tableType={tableType} />
                </td>
                <td style={{ width: '30px' }}>
                    {/* ПОМЕНЯТЬ ЭТУ ХУЙНЮ! */}
                    <DownloadImgButton el={el} imgType='guides_lndd' ind={ind} data={data} setData={setData} tableType={tableType} />
                </td>
            </tr>
        )
    }

    return (
        <div id="table8">
            <h3 className="tablesTitle">Таблица напраляющих для обложек (NCO)</h3>
            <table id="table_nco">
                <tbody id="nco_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}>
                            <AddNewProductButton isAddingNewProduct={isAddingNewProduct} setIsAddingNewProduct={setIsAddingNewProduct} data={data} setData={setData} />
                        </td>
                        <td style={{ width: '30px' }}>
                            <DeleteProductButton selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} data={data} setData={setData} tableType={tableType} />
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '80px' }}>Формат</td>
                        <td style={{ width: '60px' }}>Толщ. блока</td>
                        <td style={{ width: '110px' }}>Целевой раз-р</td>
                        <td style={{ width: '70px' }}>Вес</td>
                        <td style={{ width: '230px' }}>Направляющие Jpeg</td>
                        <td style={{ width: '230px' }}>Направляющие Psd</td>
                        <td style={{ width: '230px' }}>Направляющие Indd</td>
                    </tr>
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind} key={`nco_${el.id}`} />
                    })}
                </tbody>
            </table>
            <OnAddNewProductButtons isAddingNewProduct={isAddingNewProduct} setIsAddingNewProduct={setIsAddingNewProduct} data={data} setData={setData} tableType={tableType} />
        </div>
    )
}
