// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const newObj = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    },
  };
  return newObj;
}

crearGato("Michi", 3);

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

const obj = {
  nombre: "Gastón",
  edad: 29,
  saludo: function () {
    console.log("Hola " + this.nombre);
  },
};

agregarPropiedad(obj, "nuevaPropiedad");

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

invocarMetodo(obj, "saludo");

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  let valor = objetoMisterioso.numeroMisterioso * 5;
  return valor;
}

const objetoMisterioso = {
  numeroMisterioso: Math.floor(Math.random() * (100 - 1 + 1) + 1),
};

multiplicarNumeroDesconocidoPorCinco(objetoMisterioso);

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad];
  return objeto;
}

const objDelete = {
  nombre: "Gastón",
  edad: 29,
};

eliminarPropiedad(objDelete, "edad");

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  const user = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return user;
}

nuevoUsuario("Gastón", "Gast.n@gmail.com", "1232");

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  if (usuario.email === null || usuario.email === undefined) {
    return false;
  } else {
    return true;
  }
}

const user = {
  nombre: "Gastón",
  email: null,
};
tieneEmail(user);

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  return objeto.hasOwnProperty(propiedad);
}
const objFindProperty = {
  nombre: "Gastón",
  edad: 29,
};

tienePropiedad(objFindProperty, "email");

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  if (usuario.password === password) {
    return true;
  } else {
    return false;
  }
}

const userDate = {
  usuario: "gaston.1999",
  password: "Ff3564g",
};

verificarPassword(userDate, "Ff3r564g");

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:

  usuario.password = nuevaPassword;
  return usuario;
}

actualizarPassword(userDate, "nuevagPassword");

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

const userFriends = {
  amigos: ["Pedro", "José"],
};

agregarAmigo(userFriends, "Enzo");

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

const users = [
  { nombre: "Gastón", esPremium: null },
  { nombre: "Martín", esPremium: null },
];

pasarUsuarioAPremium(users);

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  let sumLikes = 0;
  for (let i = 0; i < usuario.posts.length; i++) {
    sumLikes = sumLikes + usuario.posts[i].likes;
  }

  return sumLikes;
}

const userPosts = {
  posts: [
    { likes: 34 }, 
    { likes: 56 }, 
    { likes: 13 }
],
};

sumarLikesDeUsuario(userPosts);

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  let addFunction =  {
    
    calcularPrecioDescuento: function (){
      let descuento = this.precio * this.porcentajeDeDescuento;
      let precioFinal = this.precio - descuento;
      return precioFinal;
    }
    };

    producto = Object.assign(producto, addFunction)
  producto.calcularPrecioDescuento();
  return producto;
};

const producto = {
  precio: 572,
  porcentajeDeDescuento: .2,
};

agregarMetodoCalculoDescuento(producto);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
