import Animal from "./animal";
export default class Dog extends Animal {
    constructor() {
        super("Dog", Animal.generateRandomSpeed(60));  
    }
}