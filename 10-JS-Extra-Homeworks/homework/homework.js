// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

    let arrayFromObj = []
  for(const key in objeto){
    let array = [];
    array.push(key);
    array.push(objeto[key]);
    arrayFromObj.push(array);
  }
  return arrayFromObj;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

/*   let resultado = {};
  string.forEach(element => {
    resultado[`${element}`] = string.match([element]/gi).length;
  }); */

  let resultado = {};

  for(let i = 0; i < string.length; i++){
    let caracter = string.charAt(i);
    let regExp = new RegExp(caracter, 'gi');
    resultado[`${caracter}`] = string.match(regExp).length;
  }
  return resultado;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayus = "",
  minus = "";

  for(const letra of s){
    if(letra === letra.toUpperCase()){
      mayus = mayus + letra;
    }else{
      minus = minus + letra;
    }
  }
  return mayus + minus;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  str = str.split(" ");
  let newStr = "";

  str.forEach(element => {
    element = element.toString().split("");
    newStr = newStr + " " + element.reverse();
  });

 return newStr.replaceAll(",", "").replace(" ", "");
}  


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  numero = numero.toString();
  let numReverse = "";

  for(let i = numero.length - 1; i > -1; i--){
    numReverse = numReverse + numero[i];
  }
  
  if((numReverse === numero)){
    return "Es capicua"
  }else{
    return "No es capicua";
  }
} 


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let exp = /[a-b-c]/gi;
  return cadena.replace(exp, "");

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

    let arrWords = [];
    let index = -1;

    for(let i = 1; arr.length > 0;){

      index = arr.findIndex(element => element.length === i)

      if(index > -1){
        arrWords.push(arr[index])
        arr.splice(index, 1)
      }else{
        i = i + 1;
      }
    }
   return arrWords;
  }


  function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí
  
  /*   let arr3 = [];
   let c = 0;
   for(let i = 0; i < arreglo1.length && arreglo1.length; i++){
      let val = arreglo1.findIndex(element => element === arreglo2[c]);
      if(val){
          arr3.push(arreglo2[i]);
      }else{
        c = c +1;
      }
    }
    console.log(arr3); */
  
    let coincidencias =[];
  
    for(let i = 0; i < arreglo1.length || i < arreglo2.length;i++){
      arreglo1.forEach(element => {
        if(element === arreglo2[i]){
          coincidencias.push(arreglo2[i])
        }
      });
    }
    return coincidencias;
  }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

