import Animal from "./animal";
export default class Speed {
    private animals: Animal[];

    constructor(animals: Animal[]) {
        this.animals = animals;
    }

    start(): void {
        const speedResults = this.getSpeedResults();
        this.displayResults(speedResults);
        const winner = this.getWinner(speedResults);
        this.displayWinner(winner);
    }

    private getSpeedResults(): { name: string, speed: number }[] {
        return this.animals.map(animal => ({ 
            name: animal.getName(),
            speed: animal.getSpeed()
        }));
    }

    private displayResults(speedResults: { name: string, speed: number }[]): void {
        speedResults.forEach(result => {
            console.log(`${result.name} runs at a speed of: ${result.speed} km/h`);
        });
    }

    private getWinner(results: { name: string; speed: number }[]): { name: string; speed: number } {
        let winner = results[0];
        for (const animal of results) {
            if (animal.speed > winner.speed) {
                winner = animal;
            }
        }

        return winner;
    }

    private displayWinner(winner: { name: string; speed: number }): void {
        console.log(`The winner is ${winner.name}, with speed of: ${winner.speed} km/h`);
    }
}