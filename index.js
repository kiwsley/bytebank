import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("kiwsley", 122);

const cliente2 = new Cliente("Banguela", 345);
    
const ContaCorrenteKiwsley=new ContaCorrente(cliente1, 1001);

const ContaCorrenteBangula = new ContaCorrente(cliente2, 1002);


console.log(cliente1)
console.log(cliente2)

console.log(ContaCorrenteKiwsley)
console.log(ContaCorrenteBangula)

console.log(ContaCorrente.numeroDeContas); 

