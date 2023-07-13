console.log("probando")

// for of loops => se usa para strings y arrays

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
