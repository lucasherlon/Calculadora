'use strict'

const numeros = [...document.querySelectorAll(".num")];
const notNum = [...document.querySelectorAll(".not-num")];
const igual = document.getElementById("igual");
const ponto = document.getElementById("ponto");
const exibicao = document.querySelector(".exibicao");
const limpar = document.getElementById("limpar");
let op = false;
let checkPoint = false;
let operacao = "";

numeros.forEach((e) => {
    e.addEventListener("click", (evt) => {
        exibicao.innerHTML += evt.target.value;
        operacao
        op = false;
    })
});

limpar.addEventListener("click", () => {
    exibicao.innerHTML = "0";
    op = false;
    checkPoint = false;
    operacao = "";
    console.log(op)
})

notNum.forEach((e) => {
    e.addEventListener("click", (evt) => {
        checkPoint = false;
        if(!op) {
            op = true;
            if(exibicao.innerHTML == "0") {
                exibicao.innerHTML = "";
            }
            exibicao.innerHTML += evt.target.value;
            operacao += evt.target.value;
            console.log(evt.target.value);
        }
        console.log(op);

    })
});

igual.addEventListener("click", () => {
    op = false;
    checkPoint = false;
    const res = eval(exibicao.innerHTML);
    exibicao.innerHTML = res;
})

ponto.addEventListener("click", (evt) => {
    if(!checkPoint) {
        exibicao.innerHTML += evt.target.value;
        operacao += evt.target.value;
        console.log(evt.target.value);
        checkPoint = true;
    }
})
console.log("estou aqui");
