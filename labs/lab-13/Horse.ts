import Animal from "./animal";
export default class Horse extends Animal {
    constructor() {
        super("Horse", Animal.generateRandomSpeed(75));
    }
}
