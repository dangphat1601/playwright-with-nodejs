export default class Animal {
    protected name: string;
    protected speed: number;
    protected maxSpeed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = this.generateSpeed();
    }

    private generateSpeed(): number {
        return Math.floor(Math.random() * this.maxSpeed) + 1;
    }

    getSpeed(): number {
        return this.speed;
    }

    getName(): string {
        return this.name;
    }

}