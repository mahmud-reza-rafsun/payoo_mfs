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