 console.log("error ya funcionó")
/*
function add(a:number, b:number){
    return a +b
}

const sum = add(2,3) */

let muted: boolean =  true;

let numerador:number = 42;
let denominador: number = 6;

let resultado = numerador/denominador;

//string

let nombre:string = 'Javier';
let saludo = `Me llamo ${nombre} `;

//arreglos

let people: string[] = [];
people = ["Isabel", "Javier"];
people.push("Hola")

console.log(people);


let peopleAndNumbers: Array<string |number> = [];
peopleAndNumbers.push("ricardo") 
peopleAndNumbers.push(123) 
peopleAndNumbers.push(12334) 
console.log(peopleAndNumbers)

//enum

enum color {
    rojo="rojo",
    verde = "verde",
    azul = "azul",
}

let colorFavorito: color = color.azul
console.log(colorFavorito)

//any

let comodin : any= "joker"
comodin = {type: "wildcard"}

//object

let someObject: object = {type: "wildcard"}


/* Funciones */


function add(a:number, b:number): number{
    return a +b
}

const sum = add(2,3) 

/* Función que regresan otra función */
// das el tipo de valor a retornar en este caso una funcion
// siendo (number) => number
function createdAdder(a: number): (number)=>number {
    return function (b: number){
        return b+a
    } 
}

const addDFour = createdAdder(4) //Aqui pasas a
const fourPlus6 = createdAdder(6) // qui pasas b
console.log(fourPlus6)


/* Cuando se quiere un valor no se requiera
?:   VALOR INDEFINIDO
lastName : string = "smith"   VALOR POR DEFECTO
 */



function fullName(firstmane: string, lastName : string = "smith"){
    return `${firstmane} ${lastName}`
}



const javi = fullName("javier","manobanda")

/* Interfaces */

interface Rectangulo{
    ancho: number,
    alto: number,
    color: color,
}


/* Aqui definimos la interfaz */
let rect : Rectangulo ={
    ancho:4,
    alto:6,
    color: color.azul
}

function area(rect:Rectangulo){
    return rect.alto * rect.ancho
}

const areaRect =area(rect)
console.log(areaRect)

rect.toString = function(){
    return `un rectangulo de ${this.alto} x ${this.ancho} y color ${this.color}`
}

console.log(rect.toString())