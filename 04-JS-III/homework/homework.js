// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

devolverPrimerElemento(["Primero", "Segundo", "Tercero"]);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

devolverUltimoElemento(["Primero", "Segundo", "Tercero"]);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

obtenerLargoDelArray(["Primero", "Segundo", "Tercero"]);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}
incrementarPorUno([3, 6, 8]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

agregarItemAlFinalDelArray([1, 2, 3], 4);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

agregarItemAlComienzoDelArray(["mes", "año"], "día");

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

dePalabrasAFrase(["Hello", "worl!"]);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

arrayContiene(["e", "g", "r"], "x");

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let resultado = numeros.reduce(function (acumulador, valorActual) {
    return acumulador + valorActual;
  });

  return resultado;
}
agregarNumeros([23, 18, 10, 30]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let promedioFinal = resultadosTest[0];

  for (i = 0; i < resultadosTest.length - 1; i++) {
    promedioFinal = promedioFinal + resultadosTest[i + 1];
  }
  return promedioFinal / resultadosTest.length;
}

promedioResultadosTest([10, 10, 12, 16]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros);
}

numeroMasGrande([10, 10, 16, 12]);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let resultado = arguments[0];
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return arguments[0];
  for (i = 0; i < arguments.length - 1; i++) {
    resultado = resultado * arguments[i + 1];
  }
  return resultado;
}

multiplicarArgumentos(3, 5, 2);

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let total = 0;
  arreglo.forEach((element) => {
    if (element > 18) {
      total = total + 1;
    }
  });
  return total;
}

cuentoElementos([3, 18, 34, 18, 40, 19]);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
}

diaDeLaSemana();

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let nToArray = Array.from(n.toString());
  if (nToArray[0] === "9") {
    return true;
  } else {
    return false;
  }
}

empiezaConNueve(98);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  let val;
  arreglo.forEach((element) => {
    if (element === arreglo[0]) {
      val = true;
    } else {
      val = false;
      return val;
    }
  });
  return val;
}

todosIguales([4, 4, 4, 5]);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesesPedidos = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element === "Enero" || element === "Marzo" || element === "Noviembre") {
      mesesPedidos.push(element);
    }
    if (mesesPedidos.length === 3) {
      return mesesPedidos;
    }
  }
  return "No se encontraron los meses pedidos";
}

mesesDelAño(["Enero", "Julio", "Septiembre", "Marzo", "Mayo", "Noviembre"]);

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayoresACien = [];
  array.forEach((element) => {
    if (element > 100) {
      mayoresACien.push(element);
    }
  });
  return mayoresACien;
}

mayorACien([23, 54, 134, 100, 155, 199]);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let valoresMasDos = [];
  for (let i = 0; i < 10; i++) {
    if (numero === i) {
      return "Se interrumpió la ejecución";
      break;
    }

    numero = numero + 2;
    valoresMasDos.push(numero);
  }
  return valoresMasDos;
}

breakStatement(-4);

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let valoresMasDos = [];
  for (let i = 0; i < 10; i++) {
    if (i !== 5) {
      numero = numero + 2;
      valoresMasDos.push(numero);
      continue;
    }
  }
  return valoresMasDos;
}

continueStatement(0);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
