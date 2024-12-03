// // step-1: set event handler
// document.getElementById('login-btn').addEventListener('click', function(event){
//   //step-2: prevent default bhavior (prevent reloading browser).
//   event.preventDefault();
//   // step-3: get the phone number
//   const phoneNumber = document.getElementById('phone-number').value;
//   const pinNumber = document.getElementById('pin number').value;
//   console.log(phoneNumber, pinNumber);
  
//   // step-4: validate the phone number and pin
//   // this is temporary. should not use it.
//   if(phoneNumber === '01628745520' && pinNumber === '8212'){
//     console.log('You are logged in')
//   }
//   else{
//     alert('Wrong phone number and pin');
//   }
// });



// add money events
document.getElementById('add-moey-btn').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step-2: get money to be added to the account.
    const addMoney = document.getElementById('add-money').value;
    const pinInput = document.getElementById('pin-input').value;
    const bankAccountNo = document.getElementById('bank-account-no').value;
    console.log(addMoney, pinInput, bankAccountNo);

    // verify pin number
    if(bankAccountNo === '55267896' && pinInput === '8212'){
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