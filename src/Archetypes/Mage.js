"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._type = 'mana';
    }
    get energyType() {
        return this._type;
    }
    static createdArchetypeInstances() {
        this._archeCount += 1;
        return this._archeCount;
    }
}
Mage._archeCount = 0;
exports.default = Mage;
