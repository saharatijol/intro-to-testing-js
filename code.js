// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if (input == undefined || input === true || input === false) {
        return "Hello, World!";
    }
    else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    if (input === 5 || input === "5") {
        return 'true';
    }
    else {
        return 'boolean';
    }
}