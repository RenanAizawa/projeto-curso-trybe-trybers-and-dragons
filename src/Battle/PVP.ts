import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _p1: Fighter;
  private _p2: Fighter;
  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this._p1 = p1;
    this._p2 = p2;
  }

  fight(): number {
    while (this._p1.lifePoints !== -1 && this._p2.lifePoints !== -1) {
      this._p1.attack(this._p2);
      this._p2.attack(this._p1);
    }
    return super.fight();
  }
}

export default PVP;