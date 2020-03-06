function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //    alert("Obrigado") ;
}

function redirecionar() {
    window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/"
}

function trocar(elemento) {
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página Carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

// function soma(n1, n2){
//     return n1 + n2;
// }

// var validar = 0;

// function validarIdade(idade) {
//     if (idade >= 18) {
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade");
// validarIdade(idade);
// console.log(validar);

// var d = new Date();
// alert(d.getDay());

// var idade = prompt("Qual sua idade?");
// if (idade >= 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade");

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     alert(count)
//     count++;
// };

// var count;
// for (count=0; count <= 5; count++) {
//     console.log(count);
//     alert(count);
//     count++;
// }


// var frutas = [
//     {
//         nome:"maça", 
//         cor:"Vermelha"
//     },
//     {
//         nome: "uva",
//         cor: "Roxa"
//     }
// ]

// console.log(frutas[0].nome + " - " + frutas[1].nome);

// var fruta = {nome:"maça", cor:"Vermelha"}
// console.log(fruta.nome);

// var lista = ["maçã", "pêra", "laranja"];
// lista.pop()
// lista.push("Uva");
// console.log(lista.length);

// console.log(lista);

// console.log(lista.toString());

// console.log(lista.join(" - "));

// var nome = "Francisco Márcio";
// var idade = 27;
// var idade2 = 30;
// var frase = "Japão é o melhor time do mundo";
// // alert(nome + " tem " + idade +" anos");
// // alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());



