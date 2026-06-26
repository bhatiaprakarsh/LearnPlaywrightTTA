var a = 10; // Global variable or global scope
console.log(a); // Output: 10

function testVar() {
    var a = 20; // Local variable
    console.log(a); // Output: 20

    if(true){
        var a = 30; // This is a new local variable, not the global one
        console.log(a); // Output: 30
    }

}
testVar();
console.log(a); // Output: 10