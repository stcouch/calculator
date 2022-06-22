//variable declaration
let value = 0;
let output = 0;
let mode = '';
let total = 0;

//get buttons and modifiers
const numberButtons = document.querySelectorAll('.number');
const modButtons = document.querySelectorAll('.modifier');
var equation = document.querySelector('.calc-screen-q');
var totalfield = document.querySelector('.calc-screen-ans');
var equals = document.querySelector('.equate');

for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", function(){
        totalfield.innerHTML += numberButtons[i].id;
        value = totalfield.innerHTML;
    });
}

//functions for add, subtract, multiply, divide, negate, clear and delete
//or add to equate as mode?

for (let i = 0; i < modButtons.length; i++){
    modButtons[i].addEventListener("click", function(){
        let mod = modButtons[i].id;
        if(mod == "multiply"){
            equation.innerHTML = value + " * ";
            totalfield.innerHTML = "";
            mode = "multiply";
        }
        if(mod == "divide"){
            equation.innerHTML = value + " / ";
            totalfield.innerHTML = "";
            mode = "divide";
        }
        if(mod == "subtract"){
            equation.innerHTML = value + " - ";
            totalfield.innerHTML = "";
            mode = "subtract";
        }
        if(mod == "add"){
            equation.innerHTML = value + " + ";
            totalfield.innerHTML = "";
            mode = "add";
        }
        console.log(mod);
    });
}

equals.addEventListener("click", function(){
    switch(mode){
        case "multiply":
    }
});
