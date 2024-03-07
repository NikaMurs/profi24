import { Link } from 'react-router-dom'
import './productsPage.css'
import { useEffect, useState } from 'react'

export default function ProductsPage() {
    // Калькулятор делает запрос ??? (get, product-id)
    // Обработка ответа запроса
    // заполняются поля калькулятора исходя из ответа на запрос
    // прикрутить выбор снизу
    // переделать окна выбора под реакт

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("./localFetch/productsList.json")
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
                                <Link key={product.id} className='contentCard' to={`/calculator/${product.id}`}>{product.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            }
        </>
    )
}