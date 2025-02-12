const readline = require('readline-sync')

// in-memory DB
const account1 = {
    accountName: 'Nguyen Van A',
    accountNumber: '123456789',
    routingNumber: '123',
    balance: 10000000,
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Nguyen Van B';
account2.accountNumber = '68686868';

const accounts = [account1, account2];

// Program interface
bankApp();

// Main app
function bankApp() {
    let isInteracting = true;
    while (isInteracting) {
        printTheAppMenu();
        const userOption = getUserOption();
        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                if (foundAccount.accountNumber) {
                    const { accountName, balance } = foundAccount;
                    console.log(`accountName: ${accountName}, balance: ${balance}`);
                } else {
                    console.log('Account not found!');
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0: isInteracting = false;
                break;
            default:
                console.log('Wrong option! \n');
        }
    }
    console.log('See you next time!');
}

// Support functions
function printTheAppMenu() {
    console.log(`
        === Banking application===
        1. Find an account
        2. Update balance
        0. Exit the program 
        `);
}

function getUserOption() {
    return Number(readline.question('Please select an option: '))
}

// if account found, reassign foundAccount for the found one
function findAccount() {
    let foundAccount = {};
    const inputAccountNumber = readline.question('Please enter account number: ');
    for (const account of accounts) {
        if (account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            break;
        }
    }
    return foundAccount;
}

function updateBalance() {
    const MAX_ALLOWED_ATTEMP = 3;
    let attemps = 0;
    do {
        const foundAccount = findAccount();
        const isNotFound = foundAccount.accountNumber === undefined;
        if (isNotFound) {
            console.log(`Attemp time: ${attemps + 1}`);
            attemps++;
        } else {
            const { balance } = foundAccount;
            console.log(`Your balance is: ${balance}`);
            const expectedWithdrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWithdrawMoney > balance) {
                console.log('Insufficient balance!');

            } else {
                console.log('Succed!');
                foundAccount.balance = balance - expectedWithdrawMoney;
                attemps = MAX_ALLOWED_ATTEMP;
            }

        }
    } while (attemps < MAX_ALLOWED_ATTEMP)
}
