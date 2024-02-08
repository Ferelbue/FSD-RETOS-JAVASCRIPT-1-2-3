////////////////////////////////// CONDICIONALES/////////////////////////////////////////////////////

//RETO 1

// let num1 = 5;
// let num2 = 15;

// (num1%num2 === 0) ? console.log("El numero", num1,"SI es multiplo del numero",num2) : console.log("El numero", num1,"NO es multiplo del numero",num2);


// (num2%num1 === 0) ? console.log("El numero", num2,"SI es multiplo del numero",num1) : console.log("El numero", num2,"NO es multiplo del numero",num1)


// RETO 2

// let num1 = 25;
// let num2 = 15;

// (num1>num2) ? console.log("El primer numero introducido", num1,"es mayor que el segundo numero introducido",num2) : console.log("El segundo numero introducido", num2,"es mayor que el primer numero introducido",num1);


// RETO 3

// let num1 = 8;

// if (num1 < 0) {
//     console.log("El numero", num1, "es negativo")
// } else if (num1 == 0) {
//     console.log("El numero", num1, "es igual a cero")
// } else {
//     console.log("El numero", num1, "es positivo")
// }


//RETO 4

// let string ="casa";

// (string.length>=5) ? console.log("El string",string,"tiene cinco caracteres o mas") : console.log("El string",string,"tiene menos de cinco caracteres")



//RETO 5

// let num1 = 4;
// let num2 = 3;
// let num3 = 3;
// let resultado = 0;

// resultado = ((num1+num2+num3)/3).toFixed(2)
// console.log(resultado)

// if(resultado >= 5){
//     console.log("El promedio es",resultado,"y es mayor de cinco")
// } 
//  console.log("El promedio es",resultado,"y es menor de cinco");



//RETO 6 

// let palabra = "cAsa";
// let enMinuscula = palabra.toLocaleLowerCase();
// console.log(enMinuscula)




// RETO 7 

// let numero = 0;
// let resultado = 0;

// numero = Math.floor((Math.random() * 19).toFixed(0));

// if ((numero % 2) === 0) {

//     console.log("El numero es par", numero)
// }else{
// console.log("El numero es impar", numero)
// }

// RETO 8

// let nota1 = 4;
// let nota2 = 6;
// let nota3 = 8;
// let resultado = 0;

// resultado = ((nota1+nota2+nota3)/3).toFixed(2)

// if(resultado >= 5){
//     console.log("La nota media es",resultado,"El alumno esta aprobado")
// } else{
//  console.log("La nota media es",resultado,"El alumno esta suspendido");
// }

// RETO 9

// let marca = "ford";
// let modelo = "fiesta";

// modelo === "focus" ? console.log("El descuento es de 10%"): console.log("El descuento es de 5%")


//RETO 10

// let mes = "febrero"

// switch (mes) {
//     case "enero":
//     case "marzo":
//     case "mayo":
//     case "julio":
//     case "agosto":
//     case "octubre":
//     case "diciembre":
//         console.log("El mes introducido tiene 31 días")
//         break;

//     case "abril":
//     case "junio":
//     case "septiembre":
//     case "noviembre":
//         console.log("El mes introducido tiene 30 días")
//         break;

//     default:
//         console.log("El mes introducido tiene 29 días")
//         break;
// }


// RETO 11

// let diametro = 1.2;
// let grosor = 0.22;

// if(diametro>1.4){
//     console.log("Rueda para vehiculo grande")
//     if(grosor<0.4){
//         console.log("El grosor para esta rueda es inferior al recomendado")
//     }
// }
// if(diametro<1.4 && diametro>0.8){
//     console.log("Rueda para vehiculo mediano")
//     if(grosor<0.25){
//         console.log("El grosor para esta rueda es inferior al recomendado")
//     }
// }
// if(diametro<0.8){
//     console.log("Rueda para vehiculo pequeño")

// }


//RETO 12

// let vehiculo = "moto";
// let kilometros = 15;
// let resultado = 0;
// const COCHE = 0.10;
// const MOTO = 0.20;
// const AUTOBUS = 0.50;



// if(vehiculo === "coche"){
//     resultado = kilometros * COCHE;


// }
// if(vehiculo === "moto"){
//     resultado = kilometros * MOTO;


// }
// if(vehiculo === "autobus"){
//     resultado = kilometros * AUTOBUS;

// }
// console.log("El precio a pagar es:", resultado,"€")








/////////////////////// BUCLES /////////////////////////////////

// RETO 1

// let numero = 25;
// let resultado = ""

// for (let i = 1; i <= numero; i++){
//     resultado += i
//     if(i<=numero-1){
//     resultado += ","
//     }
// }
// console.log(resultado)

//RETO 2

// let numeroN = 3;
// let numeroM = 56;
// let resultado = 0;

// while (resultado < numeroM) {

//     resultado += numeroN;
//     console.log(resultado)
// }


//RETO 3

// let numero1 = 45;
// let resultado = 0;
// let final = 0;

// for (let i = numero1; i>=0 ; i--){
//     resultado = i%2;
//     if(resultado === 0)
//         console.log(i)
// }


// RETO 4 

// let numero = 4
// let resultado = 0

// for (let i = 0; i <= 10; i++) {
//     resultado = numero * i;
//     console.log(resultado)
// }


// RETO 5 & 6
// let fila = "";
// let fila1 = "";
// let numero = 4;
// let primeraFila = 0;

// for (let i = 0; i < numero; i++) {

//     for (let x = 0; x <= numero -1; x++) {

//         if (x <= i) {

//             fila += "*"
//         } else {
//             fila += " "
//         }
//     }
//     console.log(fila);
//     fila = "";
// }


// RETO 7

// let numeroIntro = 50;
// let resultado = 0;

// for (let i =0 ; i<= numeroIntro ; i++){
//     resultado += i;
// }
// console.log(resultado)



// RETO 8

// let numero1 = 3;
// let numero2 = 3;
// let numero3 = 3;
// let numero4 = 3;
// let arrayNumeros = [];
// let resultado = 0;
// let numeroDatos = 0;
// let resultado2 = 0;


// arrayNumeros.push(numero1, numero2, numero3, numero4)

// numeroDatos = arrayNumeros.length-1;

// for (let i = 0; i <= numeroDatos; i++) {

//     resultado += arrayNumeros[i]

// }

// console.log(resultado2 = resultado/arrayNumeros.length)


//RETO 9

// let numero1 = 8;
// let numero2 = 1;


// if (numero1 > numero2) {

//     for (let i = numero1; i >= numero2; i--) {

//         console.log(i)
//     }
// }
// if (numero2 > numero1) {
//     for (let i = numero2; i >= numero1; i--) {

//         console.log(i)
//     }

// }
// else {
//     console.log("Numeros iguales. Introduzca los numeros de nuevo")
// }


// RETO 10


// let numero1 = 34;
// let numero2 = 8;
// let numero3 = 46;
// let numero4 = 2;
// let numero5 = 28;
// let arrayNumeros = [];
// let resultado = 0;
// let numeroDatos = 0;
// let resultado2 = 0;


// arrayNumeros.push(numero1, numero2, numero3, numero4,numero5)

// numeroDatos = arrayNumeros.length-1;

// for (let i = 0; i <= numeroDatos; i++) {

//     resultado = arrayNumeros[i] * 3;
//     console.log(resultado)
// }

// console.log(arrayNumeros)




/////////////////////////////////////////////// FUNCIONES //////////////////////////////////////////


// RETO 1


// const Grados = (gradosCelsisus) => {

//     return (gradosCelsisus*(9/5)+32)
// }

// const grados = (gradosCelsisus) => (gradosCelsisus*(9/5)+32) 

// console.log (Grados(25))
// console.log (Grados(0))


// RETO 2

// const Par = (numero) => {

//     let resultado = numero % 2;

//     if (resultado === 0) {
//         console.log("Numero par")
//     }

//     if (resultado != 0) {
//         console.log("Numero impar")
//     }
// }

// Par(6)
// Par(5)


// RETO 3 

// let res;
// let flag = 0;


// const Primo = (e) => {

//     for (let i = 0; i <= e - 1; i++) {

//         res = e % i;

//         if (res === 0) {

//             flag++;

//         }

//     }
//     if (flag >= 3) {
//         console.log("El numero NO es primo")
//     } else {
//         console.log("El numero SI es primo")
//     }
//     flag = 0;

// }

// Primo(7)
// Primo(73)
// Primo(6)
// Primo(84)
// Primo(2)


// RETO 4

// const Dni = (e) => {

//     let array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]
//     let dni = e;
//     const letra = dni.slice(-1).toUpperCase()
//     let comprobarNumeroDni;
//     let comprobarLetraDni;
//     let arrayDni = [];
//     let flag = 0;
//     let flag2 = 0;
//     let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//     for (let i = 0; i <= 8; i++) {
//         comprobarNumeroDni = dni.slice(i, i + 1);
//         for (k = 0; k <= 9; k++) {
//             if (comprobarNumeroDni == arrayNumeros[k]) {
//                 flag++;
//             }
//         }
//     }
//     if (flag == 8) {
//         console.log("Numero DNI correcto")
//     }
//     else {
//         console.log("Numero DNI incorrecto")
//     }
//     comprobarLetraDni = dni.slice(8, 9);

//     for (let j = 0; j <= 23; j++) {
//         if (comprobarLetraDni == array[j]) {
//             flag = 1;
//         }
//     }
//     flag == 1 ? console.log("Letra DNI correcta") : console.log("Letra DNI incorrecta")


//     const posicion = parseInt((dni).slice(0, -1)) % 23


//     array[posicion] == letra ? console.log("Letra Valida") : console.log("Letra Inválida")

// }


// Dni("26748328H")
// Dni("58125974H")



// RETO 5 

// const CalculoIva = (precio, iva = 0.21) => precio + (precio * iva) ;

// let cal1 = (CalculoIva(100));
// let cal2 = (CalculoIva(100,0.08));
// console.log(cal1)
// console.log(cal2)


// RETO 6

// const VocalConsonante = (e) => {

//     if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
//         console.log("La letra es una VOCAL")
//     } else {
//         console.log("La letra es una CONSONANTE")
//     }
// }
// VocalConsonante("i")
// VocalConsonante("j")
// VocalConsonante("u")
// VocalConsonante("v")


//RETO 7

// const Change = (e) => {
//     let frase = e;
//     let arrayFrase = [];
//     let newarrayFrase = [];
//     for (let i = 0; i <= frase.length - 1; i++) {
//         arrayFrase.push(frase[i])
//     }

//     for (let j = 0; j <= frase.length - 1; j++) {
//         if (arrayFrase[j] === "A") {
//             newarrayFrase.push("4")
//         }
//         else if (arrayFrase[j] === "E") {
//             newarrayFrase.push("3")
//         }
//         else if (arrayFrase[j] === "I") {
//             newarrayFrase.push("1")
//         }
//         else if (arrayFrase[j] === "O") {
//             newarrayFrase.push("0")
//         }
//         else {
//             newarrayFrase.push(frase[j])

//         }
//     }
//     console.log(newarrayFrase)
// }
// let chang1 = Change("HOLA DON PEPITO")
// let chang2 = Change("HOLA DON JOSE")
// console.log(chang1)
// console.log(chang2)

// RETO 8

// const Change = (e) => {
//     let flag = 0;
//     let frase = e.toUpperCase();
//     let arrayFrase = [];
//     for (let i = 0; i <= frase.length - 1; i++) {
//         arrayFrase.push(frase[i])
//     }

//     for (let j = 0; j <= frase.length - 1; j++) {
//         if (arrayFrase[j] === "A") {
//             flag++;
//         }
//     }
//     return flag;
// }
// let chan = Change("HOLA DON PEPITO")
//console.log(chan)





// RETO 9 

// const Mayor = (e) => {
//     let numeroMayor = 0;
//     let numero = e.toString();
//     let arrayNumero = [];

//     for (let i = 0; i <= numero.length - 1; i++) {
//         arrayNumero.push(numero[i])
//     }

//     for (let i = 0; i <= numero.length - 1; i++) {

//         if (arrayNumero[i] > numeroMayor) {

//             numeroMayor = arrayNumero[i];
//         }
//     }
//     return numeroMayor;
// }

// let may = Mayor(12312312352)
//console.log(may)




// RETO 10

// const Suma = (e) => {
//     let resultado = 0;
//     let numero = e.toString();
//     let arrayNumero = [];

//     for (let i = 0; i <= numero.length - 1; i++) {
//         arrayNumero.push(numero[i])
//     }

//     for (let i = 0; i <= numero.length - 1; i++) {

//             resultado = resultado + parseInt(arrayNumero[i]);

//     }
//  
//     return resultado;
// }

// let sum = Suma(12312312352)
// console.log(sum)


// RETO 11

// let resultado = 0;
// let divisor = 0;

// const Porcentaje = (a, b) => {

//     divisor = b / 100;

//     resultado = a * divisor;

//     return resultado;
// }

// let porcen = Porcentaje(100, 25)
// console.log(porcen)
