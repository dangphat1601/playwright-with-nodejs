import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {
    private minimumBalance: number = 50;

    constructor(initialBalance: number = 0) {
        super(initialBalance);
        if (initialBalance < this.minimumBalance) {
            throw new Error(`Initial balance must be at least ${this.minimumBalance}`);
        }
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (this.balance - amount < this.minimumBalance) {
            throw new Error(`Withdrawal would leave less than the required minimum balance of ${this.minimumBalance}`);
        }
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}