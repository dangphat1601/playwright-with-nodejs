export default abstract class BankingAccount {
    protected balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;
}