import { Link } from 'react-router-dom'
import './productsPage.css'
import { useEffect, useState } from 'react'
import fetchTest from '../../functions/fetchTest'

export default function ProductsPage() {
    // Калькулятор делает запрос ??? (get, product-id)
    // Обработка ответа запроса
    // заполняются поля калькулятора исходя из ответа на запрос
    // прикрутить выбор снизу
    // переделать окна выбора под реакт

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchTest();
        fetch(`${process.env.REACT_APP_URL}/productsList`)
            .then(response => {
                if (!response.ok) {
                    console.log("Ошибка запроса /test");
                }
                return response.json();
            })
            .then(data => {
                setData(data.products)
            })
            .catch(error => {
                console.log("Ошибка при обработке ответа: /test", error);
            });
    }, [])

    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    return (
        <>
            {data === null ? <></> :
                <div className="contentCards">
                    {chunkArray(data, 3).map((group, index) => (
                        <div key={index} className="contentCardsLine">
                            {group.map(product => (
                                <Link key={product.id} className='contentCard' to={`/calculator/${product.id}`}>
                                    <div className="backgroundImage" style={{ backgroundImage: `url('${product.img}')` }} />
                                    <span>{product.title}</span>
                                </Link>))}
                        </div>
                    ))}
                </div>
            }
        </>
    )
}