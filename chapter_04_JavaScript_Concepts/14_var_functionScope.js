//explain var function scope with example code

var a = 10; // 'a' is declared and initialized with the value 10
function testVarScope() {
    var a = 20; // This 'a' is a different variable, local to the function
    console.log(a); // This will log 20, the local variable

    if (true) {
        var a = 30; // This 'a' is still the same local variable, not a new one
        console.log(a); // This will log 30, the local variable
    }
    console.log(a); // This will log 30, because the 'var' declaration is function-scoped, not block-scoped
    //var is function-scoped, meaning that it is accessible throughout the entire function in which it is declared, regardless of block scope. In this case, the 'a' variable declared inside the if block is still the same 'a' variable declared at the beginning of the function.
}
testVarScope();