// VARIABLES

var a // declarando
var b = 'b' // declaramos y asignando
b = 'bb' // reasignando
var a = 'aa' // redeclaracion

// GLOBAL SCOPE
var fruit = 'Apple' // global
console.log(fruit)

function bestFruit(){
    console.log(fruit)
}

bestFruit()

function countries(){
    country = 'Peru'
    console.log(country)
}

countries()
console.log(country)