
let input = "";
let operator = "";
let number1 = 0;
let number2 = 0;
let currentCalculation = ""
const target = document.getElementById("result")

//all onclicks from the numbers are stored in "input" as string
function addValue(value){
    input += value
    currentCalculation += " "+value;
    target.textContent = currentCalculation;
}

function logAll() {
    console.log("This is input: "+input)
    console.log("This is number1: "+number1)
    console.log("This is number2: "+number2)
    console.log("This is typeof number 1: "+typeof(number1))
    console.log("This is typeof number 2: "+typeof(number2))
}

function addOperator(op){
    if (operator!=""){
        number2 = Number(input)
        number1 = operate(number1,number2,operator)
        number2 = 0;
        currentCalculation = number1;
        operator = op;
        currentCalculation += " "+op;
        target.textContent = currentCalculation;
        input = "";

    }
    else {
    number1 = Number(input);
    operator = op;
    currentCalculation += " "+op;
    target.textContent = currentCalculation;
    input = ""; 
    }
}


function operate(a,b,operator){
    switch (operator) {
        case "x":
            return multiply(a,b)
        case ":":
            return divide(a,b)
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
    }
}

function calculate(){
    number2 = Number(input);
    target.textContent =  operate(number1,number2,operator);
    input = "";
    operator = "";
    currentCalculation = "";
    number1 = 0;
    number2 = 0;
    
}

function reset(){
    input = "";
    operator = "";
    currentCalculation = "";
    number1 = 0;
    number2 = 0;
    target.textContent = 0;

}

function resetAll(){
    input = "";
    operator = "";
    currentCalculation = "";
    number1 = 0;
    number2 = 0;
    target.textContent = 0;

}

// ich gebe eine zahl oder mehrere ein --> done
// diese wird in input zwischengespeichert --> done
// dann clicke ich auf einen operator. 
//dabei muss input wieder auf null gesetzt werden 
//input muss in eine zahl umgewandelt werden und in einer variable gespeichert werden die fürs später rechnen gebraucht wird
//dann wird input mit der zweiten zahl befüllt
// dann clicke ich auf =
//basierend auf dem operator wird dann zahl 1 mit zahl 2 irgenwie verrechnet
// das ergebnis wird angezeigt
//alle zahlen werden deaktiviert und ich kann nur noch clear drücken

//auf clear wird zurückgesetzt
//input
//ergebnis
//operator
//zahl1 und zahl 2




//basic mathematical operations
function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}