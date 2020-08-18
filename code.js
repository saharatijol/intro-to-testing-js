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

