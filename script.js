

function operate(a,b,operator){
    switch (operator) {
        case "*":
            return multiply(a,b)
        case "/":
            return divide(a,b)
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
    }
}

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