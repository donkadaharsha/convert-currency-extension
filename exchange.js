document.addEventListener('DOMContentLoaded', (event) => {
const convert_button = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY="nQhVDUDlYEVWnzVd2ibgpzdBRs1YQqrQ"
const apiUrl ="https://api.currencybeacon.com/v1/convert"


convert_button.addEventListener('click', ()=>{
    const amountValue = document.getElementById('amount').value;
    const currencyFromCode = document.getElementById('currency_from_code').value;
    const currencyToCode = document.getElementById('currency_to_code').value;
    const end_url =  `${apiUrl}?from=${currencyFromCode}&to=${currencyToCode}&amount=${amountValue}&api_key=${API_KEY}`;
    console.log(end_url);

    fetch(end_url)
    .then(response => response.json())
            .then(data => {
                console.log(data.response.value);
                result.innerHTML = `${amountValue} ${currencyFromCode} is:<br><span style="color: blue;">${data.response.value} ${currencyToCode}</span>`;
            })
            .catch(error => {
                console.error('Error:', error);
                result.innerText = 'Error occurred during conversion';
            });
});
});