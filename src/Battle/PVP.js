"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(p1, p2) {
        super(p1);
        this._p1 = p1;
        this._p2 = p2;
    }
    fight() {
        while (this._p1.lifePoints !== -1 && this._p2.lifePoints !== -1) {
            this._p1.attack(this._p2);
            this._p2.attack(this._p1);
        }
        return super.fight();
    }
}
exports.default = PVP;
