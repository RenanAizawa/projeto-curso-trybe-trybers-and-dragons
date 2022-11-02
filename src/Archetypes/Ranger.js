"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._type = 'stamina';
    }
    get energyType() {
        return this._type;
    }
    static createdArchetypeInstances() {
        this._archeCount += 1;
        return this._archeCount;
    }
}
Ranger._archeCount = 0;
exports.default = Ranger;
