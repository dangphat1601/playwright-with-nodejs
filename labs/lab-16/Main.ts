import BankingAccount from "./BankingAccount";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

// function main() {
//     const savings = new SavingAccount(100);
//     console.log("Savings account balance: " + savings.getBalance());

//     savings.deposit(50);
//     console.log("Savings account balance after deposit: " + savings.getBalance());

//     savings.withdraw(20);
//     console.log("Savings account balance after withdrawal: " + savings.getBalance());

//     savings.withdraw(130);
//     console.log("Savings account balance after withdrawal: " + savings.getBalance());

//     savings.withdraw(10);
//     console.log("Insufficient funds:", savings.getBalance());

//      const checking = new CheckingAccount(100);
//      console.log("\nInitial checking balance:", checking.getBalance());

//      checking.withdraw(60); //
//      console.log("Balance after withdrawal:", checking.getBalance());

//      checking.withdraw(20); //
//      console.log("Balance after failed withdrawal:", checking.getBalance());

const readline = require('readline-sync');

function main() {
    console.log("=== BANK ACCOUNT PROGRAM ===");

    console.log("\n1. Saving Account");
    console.log("2. Checking Account");
    let accountType = readline.question("Select account type (1 or 2): ");

    console.log("Enter initial balance: ");
    let balance = Number(readline.question());

    let account: BankingAccount;
    if (accountType === '1') {
        account = new SavingAccount(balance);
    } else {
        account = new CheckingAccount(balance);
    }

    console.log(`Account created successfully! Initial balance: ${account.getBalance()}`);

    while (true) {
        console.log("\n1. Deposit");
        console.log("2. Withdraw");
        console.log("3. Check Balance");
        console.log("0. Exit");
        const action = readline.question("Select an action (0-3): ");

        if (action === '0') {
            break;
        }
        else if (action === '3') {
            console.log(`Current balance: ${account.getBalance()}`);
        }
        else if (action === '1' || action === '2') {
            console.log("Enter amount:");
            const amount = Number(readline.question());
            try {
                if (action === '1') {
                    account.deposit(amount);
                    console.log(`Deposited ${amount}. New balance: ${account.getBalance()}`);
                }
                else {
                    account.withdraw(amount);
                    console.log(`Withdrew ${amount}. New balance: ${account.getBalance()}`);
                }
            } catch (error) {
                console.log("Error:", error.message);
            }
        }
        else {
            console.log("Invalid selection!");
        }
    }
    console.log("Thank you!");
}
main();