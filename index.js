function receivesAFunction(callback){
    return callback();
}
function returnsAnamedFunction(){
    return function namedFunction(){
        return "I am named";
    }
}
function returnsAnAnonymousFunction() {
    return function() {
        return "before all";
    };
}

module.exports ={
    receivesAFunction,
    returnsAnamedFunction,
    returnsAnAnonymousFunction
}