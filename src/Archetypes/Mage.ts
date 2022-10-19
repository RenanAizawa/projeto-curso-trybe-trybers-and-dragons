import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _type:EnergyType;
  private static _archeCount = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    this._archeCount += 1;
    return this._archeCount;
  }
}

export default Mage;