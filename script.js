//variable declaration
let value = 0;
let output = 0;
let mode = '';
let total = 0;

//get buttons and modifiers
const numberButtons = document.querySelectorAll('.number');
const modButtons = document.querySelectorAll('.modifier');
const equation = document.querySelector('.calc-screen-q');
const totalfield = document.querySelector('.calc-screen-ans');
const equals = document.querySelector('.equate');
const clearButton = document.querySelector('.clear');

//for (let i = 0; i < numberButtons.length; i++){
//    numberButtons[i].addEventListener("click", function(){
//        totalfield.innerHTML += numberButtons[i].id;
//        value = totalfield.innerHTML;
//    });
//}

//functions for add, subtract, multiply, divide, negate, clear and delete
//or add to equate as mode?

equals.addEventListener("click", () => evaluate(mode, value, total));

clearButton.addEventListener("click", () => clear());

numberButtons.forEach((button) =>
    button.addEventListener('click', () => addDigit(button.textContent))
)

for (let i = 0; i < modButtons.length; i++){
    modButtons[i].addEventListener("click", function(){
        let mod = modButtons[i].id;
        if(mod == "multiply"){
            equation.textContent = value + " * ";
            total = value;
            totalfield.textContent = "";
            mode = "multiply";
        }
        if(mod == "divide"){
            equation.textContent = value + " / ";
            total = value;
            totalfield.textContent = "";
            mode = "divide";
        }
        if(mod == "subtract"){
            equation.textContent = value + " - ";
            total = value;
            totalfield.textContent = "";
            mode = "subtract";
        }
        if(mod == "add"){
            equation.textContent = value + " + ";
            total = value;
            totalfield.textContent = "";
            mode = "add";
        }
        console.log(mod);
    });
}


function addDigit(num){
    totalfield.textContent += num;
    value = totalfield.textContent;
}

function evaluate(mode, x, y){
    console.log(x, y);
    switch(mode){
        case "multiply":
            return x * y;
        case "divide":
            return x / y;
        case "subtract":
            return x - y;
        case "add":
            return x + y;
    }
}

function clear(){
    equation.textContent = "";
    totalfield.textContent = "";
    total = value = 0;
}
