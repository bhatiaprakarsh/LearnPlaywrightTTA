////explain let block scope with example code

let a = 10; // 'a' is declared and initialized with the value 10
console.log(a); // This will log 10, the global variable
function testLetScope() {
    let a = 20; // This 'a' is a different variable, local to the function
    console.log(a); // This will log 20, the local variable

    if (true) {
        let a = 30; // This 'a' is a different variable, local to the if block
        console.log(a); // This will log 30, the local variable
    }
    console.log(a); // This will log 20, because the 'let' declaration is block-scoped
    //let is block-scoped, meaning that it is only accessible within the block in which it is declared. In this case, the 'a' variable declared inside the if block is a different variable from the one declared at the beginning of the function.
}
testLetScope();
console.log(a); // This will log 10, the global variable