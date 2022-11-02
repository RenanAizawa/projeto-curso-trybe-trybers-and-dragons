"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Archetype {
    constructor(n) {
        this._name = n;
        this._cost = 0;
        this._special = 0;
    }
    get name() {
        return this._name;
    }
    get cost() {
        return this._cost;
    }
    get special() {
        return this._special;
    }
    static createdArchetypeInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Archetype;
