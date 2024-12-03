document.getElementById('login-btn')
    .addEventListener('click', function(event){
    // stop form reload.
    event.preventDefault();
    // console.log('click')
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // check the phone number validate.
    if(phoneNumber === '01628745520' && pinNumber === '8212'){
      console.log('your age logged in');
      window.location.href = '/home.html'
    }
    else{
      alert('Wrong number or pin');
    }
})