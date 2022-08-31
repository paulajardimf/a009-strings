//Crie a const para a frase aqui
// a)
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"";
console.log(frase);

// b)
const fraseNova = frase.replace("verde", "rosa").replace("azul", "laranja");
console.log(fraseNova);

// c)
console.log(fraseNova.includes("verde"));
console.log(fraseNova.includes("laranja"));

// extra)
console.log(fraseNova[0,53].toUpperCase() + fraseNova.substring(0));