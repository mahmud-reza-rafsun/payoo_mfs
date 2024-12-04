document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        // console.log(phoneNumber, pinNumber);

        if(phoneNumber === '01628745520' && pinNumber === '8212'){
            window.location.href = './home.html';
        }
        else{
            alert('not login');
        }
    })