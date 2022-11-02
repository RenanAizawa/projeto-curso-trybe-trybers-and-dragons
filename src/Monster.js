"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._lifePoints;
        if (damage > 0) {
            const hp = this._lifePoints - damage;
            // console.log(hp, '<<<<<<hp novo do monstro');
            if (hp < 0) {
                this._lifePoints = -1;
                return this._lifePoints;
            }
            this._lifePoints = hp;
        }
        // if (this._lifePoints <= 0) {
        //   this._lifePoints = -1;
        // }
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
}
exports.default = Monster;
