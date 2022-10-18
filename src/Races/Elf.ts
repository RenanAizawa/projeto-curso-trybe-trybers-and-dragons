import Race from './Race';

class Elf extends Race {
  private maxHp: number;
  private static raceCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHp = 99;
  }
  
  get maxLifePoints(): number {
    return this.maxHp;
  }
  
  static createdRacesInstances():number {
    this.raceCount += 1;
    return this.raceCount;
  }
}

export default Elf;