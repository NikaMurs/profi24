import { useEffect, useState } from 'react';
import '../style.css'
import SelectProductButton from '../components/SelectProductButton';
import ChangeIsActive from '../components/editTables/ChangeIsActiveButton';
import EditableCell from '../components/editTables/EditableCell';
import AddNewProductButton from '../components/editTables/AddNewProductButton';
import DeleteProductButton from '../components/editTables/DeleteProductButton';
import OnAddNewProductButtons from '../components/editTables/OnAddNewProductButtons';
import DownloadImgButton from '../components/editTables/DownloadImgButton';

export default function TableVar({ productInfo }) {
    const tableType = 'var';
    const [data, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isAddingNewProduct, setIsAddingNewProduct] = useState(false);

    useEffect(()=>{
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

                <EditableCell width={'200px'} type={'title'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'80px'} type={'shortTitle'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />


                <td style={{ width: '60px' }}>
                    <DownloadImgButton el={el} imgType='img' ind={ind} data={data} setData={setData} tableType={tableType} />
                </td>

                <EditableCell width={'120px'} type={'text1'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'120px'} type={'text2'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'120px'} type={'text3'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
                <EditableCell width={'380px'} type={'notes'} data={data} setData={setData} el={el} ind={ind} tableType={tableType} />
            </tr>
        )
    }

    return (
        <div id="table6">
            <h3 className="tablesTitle">Варианты обложки (VAR-01)</h3>
            <table id="table_var01">
                <tbody id="var01_tbody">
                    <tr style={{ backgroundColor: '#ECECEC' }}>
                        <td style={{ width: '30px' }}>
                            <AddNewProductButton isAddingNewProduct={isAddingNewProduct} setIsAddingNewProduct={setIsAddingNewProduct} data={data} setData={setData} />
                        </td>
                        <td style={{ width: '30px' }}>
                            <DeleteProductButton selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} data={data} setData={setData} tableType={tableType} />
                        </td>
                        <td style={{ width: '30px' }}>Вкл</td>
                        <td style={{ width: '30px' }}>Арт</td>
                        <td style={{ width: '200px' }}>Имя</td>
                        <td style={{ width: '80px' }}>Имя краткое</td>
                        <td style={{ width: '60px' }}>IMG</td>
                        <td style={{ width: '120px' }}>Текст 1</td>
                        <td style={{ width: '120px' }}>Текст 2</td>
                        <td style={{ width: '120px' }}>Текст 3</td>
                        <td style={{ width: '380px' }}>Прим.</td>
                    </tr>
                    {data.map((el, ind) => {
                        return <TableRow el={el} ind={ind} key={`var_${el.id}`} />
                    })}
                </tbody>
            </table>
            <OnAddNewProductButtons isAddingNewProduct={isAddingNewProduct} setIsAddingNewProduct={setIsAddingNewProduct} data={data} setData={setData} tableType={tableType} />
        </div>
    )
}
