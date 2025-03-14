export default class Animal {
    protected speed: number;
    protected name: string;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    getSpeed(): number {
        return this.speed;
    }

    getName(): string {
        return this.name;
    }

    public static generateRandomSpeed(maxSpeed): number {
        return Math.floor(Math.random() * maxSpeed + 1);
    }

}