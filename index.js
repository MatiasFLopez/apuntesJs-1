// Formas de crear variables
var miVariable = 24;
console.log("mi edad es "+ miVariable)

var miVariable = 14;
console.log("mi edad ahora es "+ miVariable)

const miConstante = 3;
console.log("el valor de mi constante es "+ miConstante)

// Operaciones con Variables
var op1= 10
var op2= 2
var resultado = op1 / op2;
console.log("resultado vale: " + resultado);

//CONDICIONALES
let miNumero = 6
let miNombre = "David"

//let resultadoPregunta = miNumero == 6
//console.log(resultadoPregunta)

if (miNumero === "6"){
    console.log("Si.")
}else {
    console.log("No.")
}

if (miNombre === "Martin"){
    console.log("Si.")
}else {
    console.log("No.")
}

//las dos condiciones tinen que ser verdaderas para que sea "Si"

if (miNumero > 4 && miNombre == "David"){
    console.log("Si.")
}else {
    console.log("No.")
}

//las cualquira puede ser V para que sea "Si"
//las Dos tienen ser f para que sea "No"

if (miNumero > 87 || miNombre == "Marcos"){
    console.log("Si.")
}else {
    console.log("No.")
}

let miNumero2 = -1
if (miNumero2 > 0){
    console.log("Mi numero es positivo")
}else if (miNumero2 === 0) {
    console.log ("Mi numero es zero")
}else {
    console.log("Mi numero es negativo")
}

//cierre de condicionales

// BUCLES 

/*let contador = 0;
while(contador < 10 ){
    console.log(contador);
    contador = contador + 1;
}*/

for (let i = 0; i <= 14; i++) {
    console.log(i);
}

// Cierre BUCLES

// FUNCIONES (no tienen un orden)

function saludar (nombre, edad){
    console.log("Hola. Mi nombre es: "+ nombre);
    console.log("Hola. Mi edad es: "+ edad);
}

function multiplicar (num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

let recibidor = multiplicar (2, 5)
console.log (recibidor);

// ARREGLOS O ARRAYS
let miArreglo = ["David", "Fernando", "Kevin", "Carla"]
for(let i = 0; i < 4 ; i++){
    console.log("Accediendo al indice: " + i);
    let mostrar = miArreglo[i];
    console.log(mostrar);
}

// OBJETOS
let persona = {
    nombre: "Julian",
    edad: "21",
    masculino: "true"
}

persona.comidaFavorita = "Hamburguesa"

let persona2 = {
    nombre: "Juliana",
    edad: "23",
    masculino: "false"
}
console.log (persona);
console.log (persona2);

