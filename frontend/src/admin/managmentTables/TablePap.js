import { useState } from 'react';
import '../style.css'
import SelectProductButton from '../components/SelectProductButton';
import ChangeIsActive from '../components/editTables/ChangeIsActiveButton';
import EditableCell from '../components/editTables/EditableCell';
import AddNewProductButton from '../components/editTables/AddNewProductButton';
import DeleteProductButton from '../components/editTables/DeleteProductButton';
import OnAddNewProductButtons from '../components/editTables/OnAddNewProductButtons';
import DownloadImgButton from '../components/editTables/DownloadImgButton';

export default function TablePap({ productInfo }) {
    const tableType = 'pap';
    const [data, setData] = useState(productInfo[tableType]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isAddingNewProduct, setIsAddingNewProduct] = useState(false);

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
                <EditableCell width={'300px'} type={'title'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'100px'} type={'shortTitle'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />


                <td style={{ width: '60px' }}>
                    <DownloadImgButton el={el} imgType='img' ind={ind} data={data} setData={setData} tableType={tableType} />
                </td>

                <EditableCell width={'60px'} type={'width'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'120px'} type={'text1'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'120px'} type={'text2'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'120px'} type={'text3'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'200px'} type={'notes'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />

            </tr>
        )
    }

    return (
        <div id="table3">
            <h3 className="tablesTitle">Бумага (PAP)</h3>
            <table id="table_pap">
                <tbody id="pap_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}>
                            <AddNewProductButton isAddingNewProduct={isAddingNewProduct} setIsAddingNewProduct={setIsAddingNewProduct} data={data} setData={setData} />
                        </td>
                        <td style={{ width: '30px' }}>
                            <DeleteProductButton selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} data={data} setData={setData} tableType={tableType} />
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '300px' }}>Имя</td>
                        <td style={{ width: '100px' }}>Крат. имя</td>
                        <td style={{ width: '60px' }}>IMG</td>
                        <td style={{ width: '60px' }}>Толщ.</td>
                        <td style={{ width: '122px' }}>Текст 1<br />(Над картинкой)</td>
                        <td style={{ width: '120px' }}>Текст 2 (Значение)</td>
                        <td style={{ width: '120px' }}>Текст 3 (Параметры)</td>
                        <td style={{ width: '198px' }}>Прим.</td>
                    </tr>
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind} key={`pap_${el.id}`} />
                    })}
                </tbody>
            </table>
            <OnAddNewProductButtons isAddingNewProduct={isAddingNewProduct} setIsAddingNewProduct={setIsAddingNewProduct} data={data} setData={setData} tableType={tableType} />
        </div>
    )
}
