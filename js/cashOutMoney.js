// cash out event

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const backAccount = document.getElementById('bank-account').value;
    const cashOutPin = document.getElementById('cash-out-pin').value;
    const trxId = document.getElementById('trx-id').value;

    console.log(cashOut, backAccount, cashOutPin);

    if(backAccount === '55267896' && cashOutPin === '8212' && trxId === '5h7Y5N2YO7n'){
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('enter proper document!!!');
    }
})