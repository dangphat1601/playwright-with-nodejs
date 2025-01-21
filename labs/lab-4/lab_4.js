const readline = require("readline-sync");

const bankAccount1 = {
    accountNumber: "123456789",
    routingNumber: "987654321",
    balance: 10000000,
}

const bankAccount2 = { ...bankAccount1, accountNumber: "68686868" };

const bankAccounts = [bankAccount1, bankAccount2];

function bankingApplication() {
    let isRunning = true;
    while (isRunning) {
        console.log(`
            === Banking application===
                1. Check balance
                2. Withdrawal
                0. Exit`);

        let option = Number(readline.question('Choose an option: '));
        switch (option) {
            case 1:
                const accountNumber = readline.question("Input your account number: ");
                const account = findAccount(accountNumber);
                if (account) {
                    console.log(`Your Account ${account.accountNumber}, Balance: ${account.balance}`);
                } else {
                    console.log("Account not found.");

                }
                break;

            case 2:
                const accountNumberToWithDraw = readline.question("Input your account number: ");
                const accountToWithDraw = findAccount(accountNumberToWithDraw)

                if (accountToWithDraw) {
                    const amout = parseFloat(readline.question("Enter the amount to withdraw: "))
                    withDraw(accountToWithDraw, amout);
                } else {
                    console.log("Account not found.");

                }
                break;

            case 0:
                console.log("Thank you!");
                isRunning = false;
                break;

            default:
                console.log("Your option is invalid, please try again!");

        }
    }
}

function findAccount(accountNumber) {
    for (let i = 0; i < bankAccounts.length; i++) {
        if (bankAccounts[i].accountNumber === accountNumber) {
            return bankAccounts[i];
        }
    }
    return null;
}

function withDraw(account, amount) {
    if (amount > account.balance) {
        console.log("Insufficient balance. Withdrawal failed!");
    } else {
        account.balance -= amount;
        console.log(`Successful transaction. Current balance: ${account.balance}`);
    }
}

bankingApplication();