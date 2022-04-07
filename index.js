//Primeiro exercicio

let nomeCompleto = "Eduardo Fonseca de Freitas"

console.log("Primeiro exercicio: " + nomeCompleto)


//Segundo exercicio

let numeroA = 10

let numeroB = 5

let multiplicação = numeroA * numeroB

console.log("Segundo exercicio: " + multiplicação)

//terceio exercicio

function saudacao(goku){
    return goku = "Oi, eu sou o goku"
}

console.log("Terceiro exercicio: " + saudacao())

//quarto exercicio
let numeroUm = 10
let numeroDois = 2

function multiplica() {
    return numeroUm * numeroDois
}
console.log("Quarto exercicio: " + multiplica())

//quinto exercicio 

function podeDirigir(idade){
    if (idade >=18){
        return "Você pode dirigir!"
    } else {
        return "você nao pode dirigir!"
    }
}

console.log("Quinto exercicio: " + podeDirigir(18))

// sexto exercicio

console.log ("Sexto exercicio: ")

for (i = 0; i < 20; i++)
    console.log(i)

// setimo execicico

console.log ("Sétimo exercicio: ")

for (i = 1; i < 20; i+= 2)

    console.log(i)

// oitavo exercicio

console.log("Oitavo exercicio: ")
function tabuada (numero) {
    for (i = 1; i <= 10; i++)
    console.log((numero) + ' x ' + (i) + " : " +(numero * i))
    //console.log(`${numeral} x ${i}: ${numeral * i}`); tambem funciona e é mais bonito, mas a minha primeira resposta foi a de cima
}

tabuada(2)

// nono desafio 

console.log("Nono exercicio: ")

function converterEmHoras(minutos) {
    let hora = minutos / 60;
    console.log(`${minutos} minutos é igual a ${hora} hora(s)."`);
}

converterEmHoras(60);

