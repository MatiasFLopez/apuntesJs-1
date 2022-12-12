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

