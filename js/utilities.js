// common shared files
// console.log('utilities')
// function getInputFieldValueById(){
//     const addMoney = document.getElementById('add-money').value;
//     return addMoney;
// }

// add money
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('show-add-money').classList.add('hidden');
    document.getElementById('show-cash-out').classList.add('hidden');
    document.getElementById('show-trans-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}