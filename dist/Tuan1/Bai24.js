"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is now running!");
    }
}
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air Conditioner is cooling the room!");
    }
}
const fan = new Fan();
fan.turnOn();
const ac = new AirConditioner();
ac.turnOn();
