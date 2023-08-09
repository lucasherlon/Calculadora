'use strict'

const numeros = [...document.querySelectorAll(".num")];
const opr = [...document.querySelectorAll(".opr")];
const igual = document.getElementById("igual");
const ponto = document.getElementById("ponto");
const exibicao = document.querySelector(".exibicao");
const limpar = document.getElementById("limpar");
let op = false;
let checkPoint = false;
let operacao = "";
let cl = false;

numeros.forEach((e) => {
    e.addEventListener("click", (evt) => {
        if(op || cl) {
            exibicao.innerHTML = "";
            exibicao.innerHTML += evt.target.value;
            operacao += evt.target.value;
            op = false;
            cl = false;
        } else {
            exibicao.innerHTML += evt.target.value;
            operacao += evt.target.value;
            op = false;
        }
    })
});

limpar.addEventListener("click", () => {
    exibicao.innerHTML = "0";
    op = false;
    checkPoint = false;
    cl = true;
    operacao = "";
})

opr.forEach((e) => {
    e.addEventListener("click", (evt) => {
        checkPoint = false;
        if(!op) {
            op = true;
            if(exibicao.innerHTML == "0") {
                exibicao.innerHTML = "";
            }
            exibicao.innerHTML = evt.target.value;
            operacao += evt.target.value;
            console.log(evt.target.value);
        }
    })
});

igual.addEventListener("click", () => {
    op = false;
    checkPoint = false;
    const res = eval(operacao);
    if (Number.isFinite(res)){
        exibicao.innerHTML = res;
    } else {
        exibicao.innerHTNL = "operacao invalida";
    }
     
})

ponto.addEventListener("click", (evt) => {
    if(!checkPoint) {
        exibicao.innerHTML += evt.target.value;
        operacao += evt.target.value;
        console.log(evt.target.value);
        checkPoint = true;
    }
})

