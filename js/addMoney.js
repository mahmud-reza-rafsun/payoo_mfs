document.getElementById('add-moey-btn').addEventListener('click', function(event){
    event.preventDefault();

    // const addMoney =  getInputFieldValueById();
    // console.log(addMoney)

    const addMoney = getInputFieldValueById('add-money');
    const bankAccountNo = getInputFieldValueById('bank-account-no');
    const pinNumber = getInputFieldValueById('pin-input');
    
    if(bankAccountNo === 55262378 && pinNumber === 8212){
        const balance = getTextValueById('current-balance');
        const newBalance = balance + addMoney;
        
        document.getElementById('current-balance').innerHTML = newBalance;
    }
    else{
        alert('Money not added');
    }
})