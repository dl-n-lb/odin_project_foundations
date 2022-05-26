
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let operation_pipe = [];
let curr_number_pipe = [];

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '+/-':  (a) => -a,
    '%':    (a) => a*100,
    '.': (a, b) => a + b/10,
    '=': null,
};

let eval = function() {
    while(operation_pipe.length > 1) {
        a  = operation_pipe.shift();
        op = operation_pipe.shift();
        b  = operation_pipe.shift();
        console.log(a, b, op);
        operation_pipe.unshift(operations[op](a, b));
    }
}

let generateButtons = function() {
    let buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; ++i) {
        let id = buttons[i].id;
        buttons[i].textContent = id;
        buttons[i].addEventListener('click', (e) => {
            if (numbers.includes(e.target.id)) {
                curr_number_pipe.push(e.target.id);
            } else if (e.target.id == "=") {
                let n = parseInt(curr_number_pipe.join(""));
                curr_number_pipe = [];
                operation_pipe.push(n);
                eval();
            }
            else {
                let n = parseInt(curr_number_pipe.join(""));
                curr_number_pipe = [];
                operation_pipe.push(n);
                operation_pipe.push(e.target.id);
            }
            console.log(operation_pipe);
        });
    }
}

generateButtons();