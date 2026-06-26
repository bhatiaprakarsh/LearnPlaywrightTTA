//Hoisting with functions in JavaScript, function declarations are hoisted to the top of their containing scope, which means you can call a function before it is defined in the code. However, function expressions are not hoisted, and trying to call them before they are defined will result in an error.

//example 1: function declaration

function getUserStatus() {
    console.log(staus);
    var staus = "Active";
    console.log(staus);
}
getUserStatus(); // This will log undefined, because 'staus' is hoisted and initialized with undefined, then it will log "Active" after initialization
