const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isvalidmail(mail){
    if(emailPattern.test(mail) && mail!=""){
        return true;
    }else{
        return false;
    }
   
}


let email = 'mukthanandha@gmail.com'
let ma =""

console.log(isvalidmail(email));
console.log(isvalidmail(ma));

// Import the readline module
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question and read the input
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  
  // Close the readline interface
  rl.close();
});

