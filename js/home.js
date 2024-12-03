// logout events
document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = '/login.html';
})

// remove or hide --> add money button
document.getElementById('add-money-button').addEventListener('click', function(){
    document.getElementById('show-cash-out').classList.add('hidden');
    document.getElementById('show-add-money').classList.remove('hidden');
})

// remove or hide --> cash out button
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('show-add-money').classList.add('hidden');
    document.getElementById('show-cash-out').classList.remove('hidden');
})


// add money events
document.getElementById('add-moey-btn').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step-2: get money to be added to the account.
    const addMoney = document.getElementById('add-money').value;
    const pinInput = document.getElementById('pin-input').value;
    console.log(addMoney, pinInput);

    // verify pin number
    if(pinInput === '8212'){
        console.log('money added')

        // get the current balance
        const balance = document.getElementById('current-balance').innerText;
        console.log(balance)

        // add addMoney with balance.
        const newBalanceNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance = newBalanceNumber + balanceNumber;

        // add the new balance to main balance.
        document.getElementById('current-balance').innerText = newBalance;

        // clear the ammout and pin field
    }   
    else{
        alert('failed to add money')
    }
});

// cash out event

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const backAccount = document.getElementById('bank-account').value;
    const cashOutPin = document.getElementById('cash-out-pin').value;

    console.log(cashOut, backAccount, cashOutPin);

    if(backAccount === '5526324255' && cashOutPin === '8212'){
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('enter proper document!!!');
    }
})