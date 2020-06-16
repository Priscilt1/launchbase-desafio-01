// Cálculo IMC 

const nome1 = "Carlos"
const peso = 84
const altura = 1.88
const sexo1 = "masculino"

const imc = peso / (altura * altura) 


if (imc >= 30) {
    console.log (`${nome1}, você está acima do peso`)
} 
    else {
    console.log (`${nome1},você não está acima do peso`)
}





//Cálculo de aposentadoria 

const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23

if ((sexo == 'F' )) {
    if ((contribuicao + idade >=85 || contribuicao >=30)) {
        console.log (`${nome}, você pode se aposentar!`)
    } else {
        console.log (`${nome}, você não pode se aposentar!`)
    }
} 


if ((sexo == 'M' )) {
    if ((contribuicao + idade >=95 || contribuicao >=35)) {
        console.log (`${nome}, você pode se aposentar!`)
    } else {
        console.log (`${nome}, você não pode se aposentar!`)
    }
} 




