document.getElementById('add-money-button').addEventListener('click', function(){
    showSectionById('show-add-money');
})

document.getElementById('cash-out-button').addEventListener('click', function(){
    showSectionById('show-cash-out');
})

document.getElementById('trans-button').addEventListener('click', function(){
    showSectionById('show-trans-history');
})

document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = './index.html'
})