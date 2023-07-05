'use strict'

const numeros = [...document.querySelectorAll(".num")];
const opr = [...document.querySelectorAll(".opr")];
const igual = document.getElementById("igual");
const ponto = document.getElementById("ponto");
const exibicao = document.querySelector(".exibicao");
const limpar = document.getElementById("limpar");
const abpr = document.getElementById("abpr");
const fchp = document.getElementById("fchp");
let op = false;
let checkPoint = false;
let abp = false;
let operacao = "";

numeros.forEach((e) => {
    e.addEventListener("click", (evt) => {
        if(op) {
            exibicao.innerHTML = "";
            exibicao.innerHTML += evt.target.value;
            operacao += evt.target.value;
            op = false;
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
    operacao = "";
    console.log(op)
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
        console.log(op);
    })
});

abpr.addEventListener("click", () => {
        exibicao.innerHTML += evt.target.value;
        operacao += evt.target.value;
        abp = true;
})

fchp.addEventListener("click", () => {
    exibicao.innerHTML += evt.target.value;
    operacao += evt.target.value;
})

igual.addEventListener("click", () => {
    op = false;
    checkPoint = false;
    const res = eval(operacao);
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
