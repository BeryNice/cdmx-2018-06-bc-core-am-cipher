window.cipher = {
  // ...

offset: 1,

encode: (offset,string) => {
  //return offset + string;
  string = inputString.value;
   offset = parseInt(inputOffset.value);
  //codificar caracter por caracter midiendo la longitid del mensaje
  for (let i = 0; i < string.length; i++) {
    let message = string.charCodeAt(i);
    console.log(string.charCodeAt(i));
    console.log(offset);
    if (string.charCodeAt(i) === 32 ){
      console.log("espacio");
      //espacios
      messageEncode += String.fromCharCode(32);
    } else if (message >=97 && message <= 122) {
      //minusculas
      messageEncode += String.fromCharCode(((message - 97 + offset) % 26) +97);
    } else if (message >=65 && message <= 90 ) {
      //Aplicando la formula mayusculas (x-65+n)%26 +65
      messageEncode += String.fromCharCode(((message - 65 + offset) % 26) +65);
    }
  }
},

decode: (offset,string) => {
  //return offset -string;
  string = inputString.value;
   offset = parseInt(inputOffset.value);
  //codificar mensaje midiendo su longitid
  for (let i = 0; i < string.length; i++) {
    let message = string.charCodeAt(i);
    console.log(string.charCodeAt(i));
    console.log(offset);
    if (string.charCodeAt(i) === 32) {
      //espacios
      messageEncode += String.fromCharCode(32);
    } else if (message >=97 && message <= 122) {
      //minusculas
      messageEncode += String.fromCharCode(((message + 97 - offset) % 26) +97);
    } else if (message >=65 && message <= 90){
    //Aplicando la formula (x+n)%+26
    messageEncode += String.fromCharCode(((message + 65 - offset) % 26) +65);
    }
  }

},



/*//hacker edition
createCipherWithOffset: () =>{
  offset:,
  encode:,
  decode:,


}
createCipherWithOffset.emcode();

createCipherWithOffset.decode();
*/
};
