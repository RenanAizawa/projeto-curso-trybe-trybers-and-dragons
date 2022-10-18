import Race from './Race';

class Orc extends Race {
  private maxHp: number;
  private static raceCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHp = 74;
  }

  get maxLifePoints(): number {
    return this.maxHp;
  }

  static createdRacesInstances():number {
    this.raceCount += 1;
    return this.raceCount;
  }
}

export default Orc;