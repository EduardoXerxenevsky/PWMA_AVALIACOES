
/* Faça um codigo na, linguagem de programação JavaScript, verificar a velocidade de um automóvel na rodovia. A informação da velocidade será informada pelo operador, em uma tela HTML.  

  Observe os seguintes requisitos:

A velocidade máximada rodovia é 120km/h
Se a velocidade for maior que 20% do limite de velocidade máxima da via a multa é de $1.000,00; mais 20 pontos na carteira
Se a velocidade for maior que 30% do limite de velocidade máxima da via a multa é de $2.000,00; mais 30 pontos na carteira
Se a velocidade for maior que 40% do limite de velocidade máxima da via a multa é de $3.000,00; mais 40 pontos na carteira
Prever as seguintes informações na tela do usuário
Se automóvel não multado, informar: "Carro OK, a sua velocidade é de n KM/h"
Se automóvel for multado, informar: "Carro multado. A sua velocidade é de n KM/h. Multa de $ y. Ele foi penalizado com  z pontos em carteira de habilitação
onde "n" = valor da velocidade e "z" é o valor da multa e "y" a quantidade de pontos na carteira de habilitação

Pede-se:

Faça o código HTML (Não precisa do CSS)
Faça o código JS*/
document.getElementById("velocidade").addEventListener("submit", function (e) {
    e.preventDefault();
    let z,y;
    const n = document.getElementById("velo").value;

    
    if(n<=120){
        document.getElementById("message").textContent = "Carro OK, a sua velocidade é de "+ n+" KM/h";
    }else if(n<=144){
        y="1.000,00";
        z=20;
        document.getElementById("message").textContent = "Carro multado. A sua velocidade é de " +n+ " KM/h. Multa de $ " +y+". Ele foi penalizado com "+ z +" pontos em carteira de habilitação";
    }else if(n<=156){
        y="2.000,00";
        z=30;
        document.getElementById("message").textContent = "Carro multado. A sua velocidade é de " +n+ " KM/h. Multa de $ " +y+". Ele foi penalizado com "+ z +" pontos em carteira de habilitação";
    }else{
        y="3.000,00";
        z=40;
        document.getElementById("message").textContent = "Carro multado. A sua velocidade é de " +n+ " KM/h. Multa de $ " +y+". Ele foi penalizado com "+ z +" pontos em carteira de habilitação";
    }
});
