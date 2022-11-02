"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxHp = 80;
    }
    get maxLifePoints() {
        return this.maxHp;
    }
    static createdRacesInstances() {
        this.raceCount += 1;
        return this.raceCount;
    }
}
Dwarf.raceCount = 0;
exports.default = Dwarf;
