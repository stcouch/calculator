//variable declaration
let value = 0; //keep track of number on top row
let mode = ''; //add/multiply/etc
let total = 0; //keep track of number being entered/evaluated

//get buttons and modifiers
const numberButtons = document.querySelectorAll('.number');
const modButtons = document.querySelectorAll('.modifier');
const equation = document.querySelector('.calc-screen-q');
const totalfield = document.querySelector('.calc-screen-ans');
const equals = document.querySelector('.equate');
const clearButton = document.querySelector('.clear');

equals.addEventListener("click", () => evaluate(mode, total, value));

clearButton.addEventListener("click", () => clear());

numberButtons.forEach((button) =>
    button.addEventListener('click', () => addDigit(button.textContent))
)

for (let i = 0; i < modButtons.length; i++){
    modButtons[i].addEventListener("click", function(){
        let mod = modButtons[i].id;
        total = Number(value);
        totalfield.textContent = "";
        if(mod == "multiply"){
            equation.textContent = value + " * ";
            mode = "multiply";
        }
        if(mod == "divide"){
            equation.textContent = value + " / ";
            mode = "divide";
        }
        if(mod == "subtract"){
            equation.textContent = value + " - ";
            mode = "subtract";
        }
        if(mod == "add"){
            equation.textContent = value + " + ";
            mode = "add";
        }
    });
}


function addDigit(num){
    totalfield.textContent += num;
    value = Number(totalfield.textContent);
}

function evaluate(mode, x, y){
    let output = 0;
    let mod = '';
    switch(mode){
        case "multiply":
            output = multiply(x, y);
            mod = "*";
            break;
        case "divide":
            output = divide(x, y);
            mod = "/";
            break;
        case "subtract":
            output = subtract(x, y);
            mod = "-";
            break;
        case "add":
            output = add(x, y);
            mod = "+";
    }
    equation.textContent = x + mod + y; 
    totalfield.textContent = output;
    value = Number(totalfield.textContent);
}

function clear(){
    equation.textContent = "";
    totalfield.textContent = "";
    total = value = 0;
}

function add(x, y){
    return x + y;
}

function multiply(x, y){
    return x * y;
}

function subtract(x, y){
    return x - y;
}

function divide(x, y){
    return x / y;
}

function newline(){

}
