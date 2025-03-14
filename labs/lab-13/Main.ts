import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";

function main() {
    const racingAnimals = [new Horse(), new Tiger(), new Dog()];

    console.log("The speeds are respectively:");
    for (const animal of racingAnimals) {
        console.log(`- ${animal.getName()} runs at ${animal.getSpeed()} km/h`);
    }

    let winner = racingAnimals[0];
    for (const animal of racingAnimals) {
        if (animal.getSpeed() > winner.getSpeed()) {
            winner = animal;
        }
    }

    console.log(`\nWinner is ${winner.getName()}, with speed ${winner.getSpeed()} km/h`);
}

main();
