// Getting the elements

const round_number = document.getElementById('round-number');
const target_number = document.getElementById('target-number');

const computer_score = document.getElementById('computer-score');
const computer_guess = document.getElementById('computer-guess');
const computer_statement = document.getElementById('computer-wins');

const human_score = document.getElementById('human-score');
const human_guess = document.getElementById('human-guess');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');

const make_guess = document.getElementById('guess');

const next_round = document.getElementById('next-round');

let c_score = 0;
let h_score = 0;
let round_num = 1;
// Input and changing the input value

human_guess.addEventListener('input', (e) => {
    handleValueChange(e.target.value);
});

const handleValueChange = (value) => {
    if (value > 0 && value < 9) {
        add.removeAttribute('disabled');
        subtract.removeAttribute('disabled');
    } else if (value >= 9) {
        add.setAttribute('disabled', true);
    } else if (value <= 0) {
        subtract.setAttribute('disabled', true);
    };
}; 

add.addEventListener('click', () => {
    human_guess.value ++;
    handleValueChange(human_guess.value);
});

subtract.addEventListener('click', () => {
    human_guess.value --;
    handleValueChange(human_guess.value);
});

// Make guess 

make_guess.addEventListener('click', () => {
    // creating a target value
    target = Math.floor(Math.random() * 10);
    // creating a computer guess value
    let c_guess;
    c_guess = Math.floor(Math.random() * 10);
    // display the numbers
    computer_guess.innerText = c_guess;
    target_number.innerText = target;
    // calculating the winner
    const h_guess = human_guess.value;
    let result;
    
    if (Math.abs(target- h_guess) < Math.abs(target- c_guess)) {
        result = true;
    } else {
        result = false;
        computer_statement.innerText = 'Computer Wins!!!';
    };

    // updating score
    
    if (result) {
        h_score ++;
        human_score.innerText = h_score;
    } else {
        c_score ++;
        computer_score.innerText = c_score;
    };

    // Enable/Disable buttons
    make_guess.setAttribute('disabled', true);
    next_round.removeAttribute('disabled');
});

// Next Round

next_round.addEventListener('click', () => {
    // increasing round number
    round_num ++;
    round_number.innertext = round_num;

    // enable/disable buttons
    next_round.setAttribute('disabled', true);
    make_guess.removeAttribute('disabled');

    // removing old values
    target_number.innerText = '?';
    computer_guess.innerText = '';
    computer_statement.innerText = '';
    human_guess.value = 1;
});


