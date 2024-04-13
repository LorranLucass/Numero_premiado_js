let num_tentativas = 3;
let num_pre = 10;
const prompt = require("prompt-sync")({sigint : true})
let n = prompt ("Escolha um numero entre 1 e 100, inclusive: ")
n = parseInt(n);
for (i=0; i<num_tentativas; i++){
    while (n !== num_pre){
        console.log(" O numero " + n + " Não está entre os premiados")
        n = prompt("Escolha um numero entre 1 e 100, inclusive: ")
        n = parseInt(n);
        break;
    }
}
if(n === num_pre){
    console.log("O numero " + n + " É premiado!")
}else {
    console.log("Infelizmente o numero " + n + " Não é premiado")
}