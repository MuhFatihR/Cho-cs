const name = document.getElementById('Username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    validasi();
});

function validasi(){
    var vemail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name.value.length < 5) {
        setErrorFor(name, 'Too Short');
    } else{
        setSuccessFor(name, 'Name Inputted');
    }

    if(email.value === '' || email.value == null) {
        setErrorFor(email, 'Email Not Detected');
    } else if(!email.value.match(vemail)){
        setErrorFor(email, 'Email not valid');
    }else{
        setSuccessFor(email,'Email Accepted');
    }

    if(address.value === '' || address.value == null) {
        setErrorFor(address, 'Address Not Inputted');
    } else{
        setSuccessFor(address, 'Address Inputted');
    }
}

function setErrorFor(input, messages){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className =  'input_box error';
    small.innerText = messages;
}
function setSuccessFor(input, messages){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className =  'input_box success';
    small.innerText = messages;
}
