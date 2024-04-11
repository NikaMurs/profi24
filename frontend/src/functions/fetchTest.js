
export default function fetchTest() {
    fetch(`${process.env.REACT_APP_URL}/test`)
        .then(response => {
            if (!response.ok) {
                console.log("Ошибка запроса /test");
            }
            return response.json();
        })
        .then(data => {
            console.log("Успешное /test");
        })
        .catch(error => {
            console.log("Ошибка при обработке ответа: /test", error);
        });
}