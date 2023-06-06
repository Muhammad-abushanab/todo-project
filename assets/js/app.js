let userName = window.prompt("Please type your Name :)");
const gender = window.prompt("Please type your gender Note that you need to enter either \"male\" or \"female\"");
const age = window.prompt("Please tell us your age ");

if (gender != null) {
    switch (gender.toLowerCase()) {
        case 'male':
            userName = "Mr." + userName;
            break;
        case 'female':
            userName = "Ms." + userName;
            break;
        default:
            break;
    }
}
console.log(userName);
if (age <= 0) {
    alert("You can't fill an age less than zero !");
}

if (confirm("Would like to skip the welcoming ?") == false) {
    alert(`Hello to todo web app ${userName}`)
};


alert('You will be asked for a 3 Yes/No questions please make sure to type \'Yes\' or \'No\' with the first letter capitalized');

const questions = ['Do you like coffee ', 'Is it sunny today ', 'Do you feel okay '];
let answers = [];

function showQuestion(questions) {
    for (let index = 0; index < questions.length; index++) {
        let answer = prompt(questions[index]);
        switch (answer) {
            case 'Yes':
                answers.push(answer);
                break;
            case 'No':
                answers.push(answer);
                break;
            default:
                answers.push('invalid');
                break;
        }
    }
    logAnswers(answers);
}

function logAnswers(answers) {
    for (let index = 0; index < answers.length; index++) {
        console.log(answers[index]);
    }
}
showQuestion(questions);
