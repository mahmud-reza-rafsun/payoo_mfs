// logout events
document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = '/login.html';
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