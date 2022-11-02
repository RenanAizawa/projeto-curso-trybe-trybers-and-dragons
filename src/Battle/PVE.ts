import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _p1: Fighter;
  private _enemies: Fighter[] | SimpleFighter[];

  constructor(p1: Fighter, enemies: Fighter[] | SimpleFighter[]) {
    super(p1);
    this._p1 = p1;
    this._enemies = enemies;
  }

  fight(): number {
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

export default PVE;