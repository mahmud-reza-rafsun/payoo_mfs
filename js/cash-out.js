document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = getInputFieldValueById('cash-out');
        const bankAccount = getInputFieldValueById('bank-account');
        const cashOutPin = getInputFieldValueById('cash-out-pin');
        const trxId = document.getElementById('trx-id').value;

        // console.log(cashOut, bankAccount, cashOutPin, trxId);

        if(bankAccount === 55262378 && trxId === '5h7Y5N2YO7n' && cashOutPin === 8212){
            const balance = getTextValueById('current-balance');
            const newBalance = balance - cashOut;
            document.getElementById('current-balance').innerText = newBalance;
        }
        else{
            alert('money not added');
        }
    })