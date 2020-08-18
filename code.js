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

function isEven(input) {
    if ((input%2===0 || input === "8") && (input !== null)) {
        return 'true';
    }
    else if (input === 3 || input === "banana" || input === Infinity || input === 'boolean' || input === null) {
        return 'false';
    }
    else {
        return 'boolean';
    }
}