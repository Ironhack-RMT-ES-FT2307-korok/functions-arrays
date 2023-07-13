console.log("probando")

// FOR OF loops => se usa para strings y arrays

let string = "patata";

// for ( let i = 0; i < string.length; i++ ) {

//   console.log(string[i])

// }

let newString = "";
for (let eachCharacter of string) {

  console.log(eachCharacter)
  newString += eachCharacter.toUpperCase() + " "

}

console.log(newString)


// cuando usar for of
// - cuando debemos checkear caracteres de un string o elementos de u array
// - cuando siempre queremos checkear todos los caracteres o elementos
// - cuando no nos interesa saber el indice de los caracteres


// thruty & falsy


// if ( 30 === 30 ) {
//   console.log("esto se va a imprimir")
// }

if ( " " ) {
  console.log("esto se va a imprimir")
}

// en JS existen valores que se interpretan como verdaderos (truthy)
// en JS existen valores que se interpretan como falsos (falsy)


// valores que se interpretan como falsos (falsy)

// 0
// ""
// undefined
// null
// NaN
// false


// let unaVar = undefined;

// unaVar += "hola";

// console.log(unaVar)


let username = "Pedro";

if (username) {
  console.log( `Hola ${username}, bienvenido a la pagina` )
} else {
  console.log( `Hola extraño, bienvenido a la pagina` )
}




// FUNCIONES

function nombreDeLaFuncion( /* opcionalmente tendremos parametros */ ) {

  // las acciones a realizar cada vez que activamos/invocamos la funcion
  // opcionalmente tendremos un return
  return // => retornar un valor fuera de la funcion.

}

// como invocar/activar
nombreDeLaFuncion( /* opcionalmente le daremos argumentos */ )


function sayHello( patata, otroParam ) {
  // let patata = "Pedro"
  // console.log(patata)

  console.log( `Hola ${patata} de ${otroParam}` );

}


sayHello( "Pedro", "Barcelona" )
sayHello( "Luis" )
sayHello( "Rishi" )

console.log("descansar")

sayHello( "Mercedes" )
sayHello( "Anna" )



// RETURN

function sumNumbers( num1, num2 ) {
  // let num1 = 10;
  // let num2 = 7;

  let sumaFinal = num1 + num2
  // console.log(sumaFinal)

  return sumaFinal; // que va a ser el output de la funcion
}


let resultadoFuncion = sumNumbers( 10, 7 ) // 17
// 1. ejecuta todo el codigo dentro de la funcion
// 2. el valor retornado, almacenalo dentro de una nueva variable

// quiero usar ese valor para sumarlo a otro

console.log(resultadoFuncion)
// como podemos sacar el valor final de funcion para usarlo más adelante en el codigo

let resultado2 = sumNumbers(resultadoFuncion, 20)
console.log(resultado2)




// ejemplo avanzado de una funcion sin return (lo veremos el martes semana 2)
// function modifyDom() {
//   let H1 = document.querySelector("h1") 
//   H1.innerText = "Adios"
// }

// modifyDom()


// ejemplo funcion

let staff1 = "pedro";
let staff2 = "antonio";

function capitalize( string ) {
  
  let capitalizedName = string[0].toUpperCase() + string.slice(1)
  console.log(capitalizedName)
  
  return capitalizedName
}

let capStaff1 = capitalize(staff1)
let capStaff2 = capitalize(staff2)
let capStaff3 = capitalize("ruth")

console.log( `Nuestros TA/CTA excelentes son: ${capStaff1}, ${capStaff2} y ${capStaff3}` )



// diferences formas de crear funciones

// function de declaracion
function functionDeclaration() {
  return; // opcional
}

// funcion de expression
const funcionExpression = function () {
  return; // opcional
}

// funciones de flecha
const arrowFunction = () => {
  return; // opcional
}

functionDeclaration();
funcionExpression();
arrowFunction();


// ARRAYS

// syntax

// [ varios elementos listados, separador por comas ]

let unArray = [ "hola", 50, true, undefined, null, NaN, [ "adios" ], { name: "pedro" }, () => {/* ... */} ]


let cities = [ "Madrid", "Sevilla", "Zaragoza", "Berlin", "Tokyo", "Cadiz" ]


console.log(cities.length) // 6;


// buscar el primer elemento del array
console.log( cities[0] )

// primer caracter del primer elemento del array
console.log( cities[0][0] )

// el ultimo elemento del array
console.log( cities[cities.length - 1] )

// la primera letra de la ultima ciudad
console.log( cities[cities.length - 1][0] )


// la ultima letra de la ultima ciudad
// console.log( cities[cities.length - 1][cities[cities.length - 1].length - 1] )

let lastCity = cities[cities.length - 1]
console.log(lastCity)

let lastCharLastCity = lastCity[lastCity.length - 1]
console.log(lastCharLastCity)


// metodos de arrays

// indexOf => la posición de un elemento

console.log( cities.indexOf("Sevilla") ) // 1

console.log( cities.indexOf("Barcelona") ) // -1 => no existe

// includes => si existe o no existe

console.log( cities.includes("Tokyo") ) // true

console.log( cities.includes("Paris") ) // false


// slice() => retorna un array con una copia de los elementos

console.log( cities.slice( 2, 4 ) )

console.log( cities.slice( 3 ) )

console.log( cities.slice( -2) )

// array con la primera y la ultima ciudad
let nuevoArr = [ cities[0], cities[cities.length - 1] ]
console.log(nuevoArr)

let nuevoArr2 = [ cities[0], cities.slice(-1)[0] ]
console.log(nuevoArr2)


console.log(cities)


// Mutabilidad en JS

let str = "hola";


console.log(str[0])

str[0] = "H";

console.log(str)
// los strings y otros tipo de data primitivos son INMUTABLES

str = str[0].toUpperCase() + str.slice(1)

console.log(str)



let friends = [ "Ross", "Monica", "Chandler", "Joey", "Phoebe", "Rachel" ]

friends[0] = "Mike";

console.log(friends)
// arrays, objetos y cualquier elemento complejo se considera MUTABLE
// no todos los metodos mutan el array original

let sliced = friends.slice(2, 3); // crean una copia
console.log(sliced)

console.log(friends)



// metodos que si mutan el array

// borrar

let elementoBorrado = friends.pop(); // eliminar el ultimo elemento

console.log("elemento borrado", elementoBorrado)
console.log("despues de pop", friends)

friends.shift(); // elimina el primer elemento
console.log("despues de shift", friends)


// añadir

friends.push("Janice")
console.log("despues de push", friends)

friends.unshift("Gunther")
console.log("despues de unshift", friends)

// añadir o borrar elementos internos => .splice()


friends.splice(3, 0, "Robert", "Emily")
// 1. (obligatorio)posicion donde hará el cambio
// 2. (obligatorio o 0) cantidad de elementos a borrar
// 3 o más. (opcionales) los elementos que quiero agregar al array

console.log("despues de splice", friends)