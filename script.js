//Declaração de variáveis
let a,b,c;
//Atribuição de valores
a=1;
b=10;
c=a+b;



console.log(c);
//Seleção do id com getElementById (atenção ao camel case) inner htMl
document.getElementById("texto").innerHTML="Aulona top d++++ slc <b>JS</b>";

console.log("Teste console");


/*No JavaScript temos 3 tipos de variáveis, sendo elas:
var---->  
let---->
const-->
*/

/*
var pote = "bombom";
alert(pote)


let nome, sobrenome, nomeCompleto;
//No caso de strings, o + faz concatenação
nome = "Jeferson";
sobrenome = "Saturnino";
nomeCompleto = nome + " " + sobrenome;

alert(nomeCompleto);
*/

//const myStr = "myStr";
 
//myStr = "mensagem"

//retorna erro acima, tentando mudar valor de uma const

//alert(myStr);

/* Operadores no JavaScript:

São usados para atribuir valores, executar operações aritméticas e muito mais.

sinais: + - * / = ++ -- -= && || etc...

1) Operadores aritiméticos:
*/

// let val1, val2, total;

/*val1 = 3;
val2 = 6;
total = val1 + val2;

alert(total);
*/

//Quando se usa + com strings ocorre concatenação.
/*valor1 = "Dimitri ";
valor2 = "Santos";

mensagem = valor1 + valor2;
alert(mensagem);
*/

// operadores comparação

/*let valor1, valor2;

valor1 = 10;
valor2= 17;
//não são iguais, resultado false.
alert(valor1 == valor2)
*/

//alert(1>=1);

/*let val1, val2, val3;
val1 = 2;
val2 = "2";
val3 = 6;

total = (val1 == val2);
alert(total);

total = (val1 === val2);
console.log(total)
*/

/*let val1, val2, val3;
val1 = 8;
val2 = 18;
let idade = 17;
*/
/*eleitor = (idade<18) ? "Não eleitor": "Eleitor";
alert(eleitor);

total = (val1 === val2);
console.log(eleitor)

//Operador && (e)
eleitor = (idade >=18 && idade < 65) ? "idade = " +idade+ " eleitor" :"idade = " + idade + " Não eleitor";
console.log(eleitor)
//Operador || (ou)
eleitor = (idade >=16 || idade >=18) ? "idade = "+ idade +" eleitor" :"idade = " + idade + " Não eleitor";
console.log(eleitor)
//Operador ! (não)
eleitor = !(idade >=18) ? "idade =" + idade +" Não eleitor" :"idade = " + idade + " Eleitor";
console.log(eleitor)*/

//Funções:
//Função pra soma:
/*function soma(val1,val2){
        return val1 + val2;
}

//Função pra subtração:
function subtracao(val1,val2){
    return val1 - val2;
}

function multiplicacao(val1, val2){
    return val1 * val2;
}

document.getElementById("texto").innerHTML = soma(10,20);
*/

/*Conceito de objetos

Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo:"ka", ano:2014}

Os valores dentro de um objeto são chamados de propriedades.

Objetos também podem ter métodos. Um método é uma função ccolocadas dentro de uma propriedade.
*/ 

/*const carro = {
    marca: "ford",
    modelo: "fusion",
    ano: 2020,
    placa:"ABC-1234",
    buzina: function () { alert("bibiii") },
    completo: function() {
        return "A marca é "+this.marca+" e o modelo é "+this.modelo+".";
    }
};

console.log(carro.completo());
carro.buzina();
*/

/* Eventos

Eventos são ações disparadas pela interação dos usuários na página.
é o correto manejo desses eventos que tornam as páginas interaticas e dinnâmicas.

exemplos:
onclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando mouse está sobre elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.*/

/*function eventoClick(){
    alert("Evento ativado.");
}*/

function eventoClick(){
    document.body.style.backgroundColor = "yellow";
}

function eventoOver(){
    document.body.style.backgroundColor = "blue";

}



//Arrays, são listas, que contém vários itens, ex:

const lista = ["arroz","feijão", "macarrão", "leite"]; //array
lista[3] = "acarajé";
let x = lista[3];
alert(x);

const pessoa = {nome:"Jeferson", sobrenome:"Saturnino", idade:30}; //objeto
console.log(pessoa.nome);
console.log(lista[2]);

