let num1=10;
let num2=8;

document.getElementById("num1-el").innerHTML=num1;
document.getElementById("num2-el").innerHTML=num2;
let sumEl = document.getElementById("sum-el")


function add(){
let result=num1+num2;
sumEl.innerHTML="Sum:"+result;
}
function subtract(){
    let result=num1-num2;
sumEl.textContent="Sum:"+result;
}
function divide(){
    let result=num1/num2;
    sumEl.textContent="Sum:"+result;
}
function multiply(){
    let result=num1*num2;
    sumEl.textContent="Sum:"+result;
}