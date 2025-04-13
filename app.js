function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let current = document.getElementById('display').innerText;
    document.getElementById('display').innerText = current.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById('display').innerText;
    try {
        let result = eval(expression);
        document.getElementById('display').innerText = result;
    } catch {
        document.getElementById('display').innerText = 'Error';
    }
}
