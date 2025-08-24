/*

2. Closures in JavaScript
1. Interview-Friendly Definition

"A closure is created when an inner function remembers and can access variables from its outer function's scope, even after the outer function has finished executing."

2. Detailed Explanation

Closures happen because of lexical scoping — functions remember the scope where they were created.

The inner function keeps a reference to the outer function’s variables, not a copy.

This allows:

Data privacy (simulate private variables)

Function factories

Maintaining state without global variables

3. Example

Basic Example

function outer() {
    let counter = 0; // outer scope variable
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}

const countUp = outer();
countUp(); // 1
countUp(); // 2
countUp(); // 3


Here, inner() still has access to counter even after outer() has finished executing.

Real-World Use Case: Data Privacy

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, Balance: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: ${amount}, Balance: ${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        }
    };
}

const account = createBankAccount(100);
account.deposit(50); // Balance: 150
account.withdraw(30); // Balance: 120
// balance variable is private

4. Common Mistakes

Not realizing each function call creates a new closure with its own scope.

Confusing closure with this binding — closure relates to variable scope, not object context.

5. Possible Follow-Ups

How do closures help in event listeners?

What are memory implications of closures?

How are closures different from objects with private properties?

*/