
let curr_eqn = "";

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a*100,
};

let format = (eqn) => {
    return eqn.match(/([\d|.]+)|[\+\-\*\/]/g);
}

let round = (n, dp) => {
    return Math.round(n * Math.pow(10, dp)) / Math.pow(10, dp);
}

let eval = (eqn) => {
    eqn = format(eqn);
    if (eqn.length === 1) return eqn[0];
    const next = eqn.findIndex(operator => (operator in operations));
    const res = round(operations[eqn[next]](+eqn[next-1], +eqn[next+1]), 4);
    eqn.shift(); eqn.shift(); eqn.shift();
    eqn.unshift(res.toString());
    return eval(eqn.join(""));
}

let prev_op_calc = false;

let generateButtons = function() {
    let buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; ++i) {
        let id = buttons[i].id;
        buttons[i].textContent = id;
        buttons[i].addEventListener('click', (e) => {
            if (e.target.id === "=") {
                curr_eqn = eval(curr_eqn);
                prev_op_calc = true;
            } else if (e.target.id === "AC") {
                curr_eqn = "";
            } else {
                if (prev_op_calc && !(e.target.id in operations)) {
                    curr_eqn = "";
                    prev_op_calc = false;
                }
                curr_eqn = curr_eqn.concat(e.target.id);
            }
            

            // make display text correct
            let display = document.getElementsByClassName('display')[0];
            display.textContent = curr_eqn;
        });
    }
}

generateButtons();