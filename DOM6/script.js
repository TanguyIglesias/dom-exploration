

addEventListener('keyup', function (event) {
    var inputFirstName= document.getElementById('firstname');
    var firstName= document.getElementById('display-firstname');    
    firstName.innerHTML= inputFirstName.value;
    
});

addEventListener('keyup', function (event) {
    var age= document.getElementById('age');
    var aHardTruth= document.getElementById('a-hard-truth');
    if (age.value > 18) {
        aHardTruth.style.visibility= 'visible';
    }
    else{
        aHardTruth.style.visibility= 'hidden';
    }
});

addEventListener('keyup', function (event) {
    var password= document.getElementById('pwd');
    var passwordConfirm= document.getElementById('pwd-confirm');
    if(password.value.length<6 || password.value != passwordConfirm.value){
        passwordConfirm.style.borderColor= 'red';
        password.style.borderColor= 'red';
    }
    else{
        passwordConfirm.style.borderColor= 'green';
        password.style.borderColor= 'green';
    }
});

addEventListener('change', function (event) {
    var darkMode= document.getElementById('toggle-darkmode');
    if(darkMode.value==='dark'){
        document.body.style.backgroundColor= 'black';
        document.body.style.color= 'white';
    }
    else{
        document.body.style.backgroundColor= 'white';
        document.body.style.color= 'black';
    }
});




