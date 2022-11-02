"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(p1, enemies) {
        super(p1);
        this._p1 = p1;
        this._enemies = enemies;
    }
    fight() {
        // while (this._p1.lifePoints !== -1
        //     && this._enemies.every((en) => en.lifePoints !== -1)) {
        //   this._enemies
        //     .forEach((enemy: Fighter | SimpleFighter) => this._p1.attack(enemy));
        //   this._enemies
        //     .forEach((enemy: Fighter | SimpleFighter) => enemy.attack(this._p1));
        // }
        this._enemies.forEach((inimigo) => {
            while (this._p1.lifePoints !== -1 && inimigo.lifePoints !== -1) {
                // console.log(this._p1.lifePoints, '<<<<<< p1 lifepoints');
                // console.log(inimigo.lifePoints, '<<<<<<< inimugo hp');
                this._p1.attack(inimigo);
                inimigo.attack(this._p1);
            }
        });
        return super.fight();
    }
}
exports.default = PVE;
