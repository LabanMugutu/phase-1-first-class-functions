// 1. Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
}

// 2. Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        return "I am a named function";
    };
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function () {
        return "I am an anonymous function";
    };
}

// Export them for the tests
module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
