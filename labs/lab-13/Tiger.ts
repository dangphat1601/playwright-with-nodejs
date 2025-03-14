import Animal from "./animal";
export default class Tiger extends Animal {
    constructor() {
        super("Tiger", Animal.generateRandomSpeed(100));
    }
}