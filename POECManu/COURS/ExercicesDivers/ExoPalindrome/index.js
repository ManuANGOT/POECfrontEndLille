function palindrome(str) {
   
    var re = /[^A-Za-z0-9]/g; 
    str = str.toLowerCase().replace(re, '').split("").reverse();
   
   
    var len = str.length; 
    
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) { 

          console.log ('false'); 
      }
    }
    console.log('true'); 
    return console.log(str);
   }
   
   palindrome("riGolade");


  /*
  Correction 
  function palindrome(mot){
    return mot.toLowerCase().split(",");

    console.log(palindrome("Kayak"));
donne : ['k','a','y','a','k']
    

    --------------------------------------
 function palindrome(mot){
  let minuscule = mot.toLowerCase()
  minuscule === minuscule.split("").reverse().join("") &&;

    console.log("Je suis un palindrome");
  }

  */














