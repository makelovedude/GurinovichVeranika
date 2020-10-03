var display = document.getElementById('display');
var keys = document.querySelectorAll('.key');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var isResult = false;

function isOperator(button) {
    return ["*", "+", "-", "/"].includes(button);
}

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function(e) {
        var input = display.value;
        var button = e.target.innerHTML;
        if (isResult) {
            input = "";
            isResult = false;
        }
        if (!(input.length >= 16  || (isOperator(button) && input.length === 0))) {
            input = input + button;
        }
        display.value = input;
    });
}

result.addEventListener("click", function() {
    var expression = display.value;
    if (isOperator(expression[expression.length - 1])) {
        expression = expression.slice(0, -1);
    }
    var resultNumber = eval(expression);
    if (resultNumber === Infinity || resultNumber === -Infinity) resultNumber = "Error";
    display.value = resultNumber;
    isResult = true;
});

clear.addEventListener("click", function() {
    display.value = "";
    isResult = false;
})