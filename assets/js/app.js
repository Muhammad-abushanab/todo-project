let userName = window.prompt("Please type your Name :)");
const gender = window.prompt("Please type your gender Note that you need to enter either \"male\" or \"female\"");
const age = window.prompt("Please tell us your age ");

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
console.log(userName);
if (age <= 0) {
    alert("You can't fill an age less than zero !");
}

if (confirm("Would like to skip the welcoming ?") == false) {
    alert(`Hello to todo web app ${userName}`)
};
