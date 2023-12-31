import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
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

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;