//variable declaration
let value = ''; 
let value2 = '';
let total = ''; //keep track of number being entered/evaluated
let mode = ''; //add/multiply/etc
let eqFlag = 0; 

//get buttons and modifiers
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.modifier');
const equationfield = document.querySelector('.calc-screen-q');
const totalfield = document.querySelector('.calc-screen-ans');
const equals = document.querySelector('.equate');
const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => clear());

equals.addEventListener('click', () => equate(mode, value2, value));

numbers.forEach(function(element){
    element.addEventListener('click', () => addDigit(element.id));
});

operators.forEach(function(element){
    element.addEventListener('click', () => evaluate(element.id, value2, value));
});

function equate(mode, x, y){ //for '='
    equation(mode, "equals");
    value2 = operate(mode, x, y);
    console.log(value2);
    updateTotal(value2);
    eqFlag = 1;
}

function evaluate(op, x, y){ //for other operator
    if(value2 && value && eqFlag != 1){ 
        value2 = operate(mode, x, y);
        equation(op);
    }
    operation(op);
    eqFlag = 0;
}

function updateTotal(tmp){
    totalfield.textContent = tmp;
}

function equation(mode, eq = "other"){
    totalfield.textContent = "";
    if(eq == "equals"){
        switch(mode){
            case "add":
                equationfield.textContent = value2 + "+" + value;
                break;
            case "subtract":
                equationfield.textContent = value2 + "-" + value;
                break;
            case "multiply":
                equationfield.textContent = value2 + "*" + value;
                break;
            case "divide":
                equationfield.textContent = value2 + "/" + value;
        }
    } else if(eq == "other"){
        switch(mode){
            case "add":
                equationfield.textContent = value2 + "+";
                break;
            case "subtract":
                equationfield.textContent = value2 + "-";
                break;
            case "multiply":
                equationfield.textContent = value2 + "*";
                break;
            case "divide":
                equationfield.textContent = value2 + "/";
        }
    }
}

function operation(op){
    mode = op;
    if(!value2)
        value2 = value;
    value = '';
}

function addDigit(x){
    if(value2) equation(mode);
    value += x;
    totalfield.textContent = value;
}

function operate(operator, x, y){
    console.log(operator, x, y);
    let output = 0;
    switch(operator){
        case "add":
            output = add(x, y);
            break;
        case "subtract":
            output = subtract(x, y);
            break;
        case "multiply":
            output = multiply(x, y);
            break;
        case "divide":
            output = divide(x, y);
            break;
    }
    return output;
}

function add(x, y){
    return Number(x) + Number(y);
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function clear(){
    value = totalfield.textContent = value2 = equationfield.textContent = '';
}
