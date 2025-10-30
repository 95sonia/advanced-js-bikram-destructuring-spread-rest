//RESUELVE LOS EJERCICIOS AQUÍ

// 1- Dado el objeto empleados, extrae la empleada Ana completa.


const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [ana] = empleados.filter(empleado => empleado.name === "Ana")
console.log(ana)


// 2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com

const { email: emailLuis } = empleados.find(({ name }) => name === "Luis");
console.log(emailLuis) // Luis@gmail.com
console.log(empleados)


// 3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;

[a, b] = [b, a]
console.log(a)  // muestra 3
console.log(b)  // muestra 5

//4.- Dado el objeto HIGH_TEMPERATURES: 

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
//const maximaHoy = HIGH_TEMPERATURES.today;
//const maximaManana = HIGH_TEMPERATURES.tomorrow;
// Para desestructurar un objeto se crea una const usando {} con las propiedades que me interesen y asignandoles valor en este caso.

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES
console.log(maximaHoy);
console.log(maximaManana);


/*5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
operador REST ...numeros -> agrupa todos los argumentos restantes de una funcion (los q vayan detras de los puntitos) en UN ARRAY.
Con el array obetenido ya podemos USAR METODOS para manejar los elementos 
metodo .reduce() -> recorre todos los elementos del array y los REDUCE a 1 valor. En este caso SUMA. 
OJO!! Al haber solo una línea de código, no hay que poner llaves. Las puse y da error...

*/

const sumEveryOther = (...numeros) =>
  numeros.reduce((acumulador, numero) => acumulador + numero, 0)

console.log('La suma de todos los argumentos es', sumEveryOther(2, 8, 10));



// 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
//operador REST ...cosas -> agrupa todos los argumentos en un array
//Hay que usar .filter() para filtrar los elementos del array; junto con typeof para que me coja solo numeros 
//metodo .reduce() -> recorre todos los elementos del array y los REDUCE a 1 valor. En este caso SUMA. 

const addOnlyNums = (...cosas) => {
  const soloNumeros = cosas.filter(item => typeof item === "number");
  return soloNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(addOnlyNums(1,'hola',2, 4,'caracola')); // muestra 7

// 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// operador REST ...argumentos -> agrupa todos los argumentos en un array
// array.length muestra el nº de elementos del array

const countTheArgs = (...argumentos) => {
  return argumentos.length;
}

console.log(countTheArgs(60, 70, true, 30, 'libro')); //muestra 5

//8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
// Operador SPREAD convierte un array o un objeto en una lista de elementos individuales. Se pone...antes del nombre del array

const combineTwoArrays = (array1, array2) => {
  return [...array1, ...array2]; // creo un array que contiene los 2 anteriores
}

console.log(combineTwoArrays([2, 60, 'hola'],[3, true, 'pepe'])); // muestra [ 2, 90, 60, "hola", 3, true, "pepe" ]


// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.



// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.



// 11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.