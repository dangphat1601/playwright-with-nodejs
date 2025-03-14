import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";
import Speed from "./Speed";

const speed = new Speed([new Horse(), new Tiger(), new Dog()]);
speed.start();