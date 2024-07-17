    let mail = document.getElementById("email").value;
    let password = document.getElementById("password").value;



const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




function validateEmail(email) {
    if(emailPattern.test(email)) {
        document.getElementById('display').innerHTML = 'Valid mail';
        return true;
    } else {
        document.getElementById('display').innerHTML = 'Invalid email';
        return false;
    }
}

    function validatePassword(pass){
        if(passwordPattern.test(pass)){
            document.getElementById("reenterd").innerHTML ="";
            return true;
        }else{
            document.getElementById("reenterd").innerHTML ="passwords are not matched/invalid password ...Re-enter passwords";
        }
    }

    
function myfunction(){
    if(validateEmail(mail)){
        if(validatePassword(password)){
            window.location.href="https://websoc.ai/"
        }else{
            alert('Invalid password. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.');

        }

    }else{
        alert('Invalid email. Please enter a valid Gmail address.');

    }
}