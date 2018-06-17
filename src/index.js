//VARIABLES GLOBALES
//declaramos la variable donde se almacena el mensaje de entrada
let inputString = document.getElementById('stringMessage');
//declaramos la variable donde se almacena la posición a desplazar
let inputOffset = document.getElementById('keychainOffset');
//reasignando el valor de entrada a nuevas variables
let string;
let offset = "";
// declaramos una nueva variable en donde se almacena el mensaje codificado
let messageEncode = "";
let messageDecode = "";
// declarando botones
let btnEncode = document.getElementById('buttonEncode');
let btnDecode = document.getElementById('buttonDecode');
let btnReset = document.getElementById('buttonReset')


// Imprimimos mensaje en HTML
//  document.getElementById('encryptedMessage').innerHTML = messageEncode;

/*
document.getElementById("buttonEncode").addEventListener("click", cipher.encode(offset,string){
    document.getElementById("encryptedMessage").innerHTML = "Hello World";
});
*/


btnEncode.addEventListener('click', () => {
  string = inputString.value;
  offset = parseInt(inputOffset.value);
  cipher.encode(offset,string);
  encryptedMessage.innerHTML = messageEncode;
} );



btnDecode.addEventListener('click', () => {
  string = inputString.value;
  offset = parseInt(inputOffset.value);
  cipher.decode(offset,string);
  encryptedMessage.innerHTML = messageDecode;
} );

//let string = //valor del input anterior

btnReset.addEventListener('click', () => {
    document.getElementById('coder').reset();
    document.getElementById('encryptedMessage').innerHTML = "Aquí se mostrará tu mensaje cifrado/descifrado";
} );
