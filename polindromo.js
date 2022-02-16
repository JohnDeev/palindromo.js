function isPalindrome(str) {
    if(Number.isInteger(str)){
        let revers = str.toString().split("").reverse().join("");
        
       
        return str.toString() === revers ? "El entero es palindromo" : "El entero no es palindromo";
    } else {

        const strReversed = str.split("").reverse().join("");
      
        return strReversed === str ? "La palabra es palindromo" : "la palabra no es palindromo";
    }
  }