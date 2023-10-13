let currentResult = "";

function appendToResult(value) {
    currentResult += value;
    document.getElementById("result").value = currentResult;
}

function clearResult() {
    currentResult = "";
    document.getElementById("result").value = currentResult;
}

function calculateResult() {
    try {
        const result = eval(currentResult);
        document.getElementById("result").value = result;
        currentResult = result.toString();
    } catch (error) {
        document.getElementById("result").value = "Error";
        currentResult = "";
    }
}
