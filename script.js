

function operate(a,b,operator){
    switch (operator) {
        case "*":
            const result = multiply(a,b)
            break;
        case "/":
            const result = divide(a,b)
            break;
        case "+":
            const result = add(a,b)
            break;
        case "-":
            const result = subtract(a,b)
            break;
    }
    return result;
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