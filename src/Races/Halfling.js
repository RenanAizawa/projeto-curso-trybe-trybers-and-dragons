"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxHp = 60;
    }
    get maxLifePoints() {
        return this.maxHp;
    }
    static createdRacesInstances() {
        this.raceCount += 1;
        return this.raceCount;
    }
}
Halfling.raceCount = 0;
exports.default = Halfling;
