const expressionBtn = document.querySelectorAll(".expression");

const inputExp = document.querySelector(".inputExp");
const calculate = document.querySelector(".calculate");
const deleteBtn = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");

expressionBtn.forEach(el => {
    el.onclick = function (ev) {
        if( result.innerText === "SYNTAX ERROR")  result.innerText = "";
        inputExp.innerText += ev.target.textContent
    }
})

calculate.onclick = function () {
    try {
        const expr = inputExp.innerText;
        if(expr !== "") result.innerText = eval(inputExp.innerText);
    } catch (_err) {
        inputExp.innerText = "";
        result.innerText = "SYNTAX ERROR";
    }
}

deleteBtn.onclick = function () {
    inputExp.innerText = inputExp.innerText.slice(0,-1);
}

clear.onclick = function () {
    result.innerText = "";
    inputExp.innerText = "";
}
