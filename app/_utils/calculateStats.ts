import { Equipment, EquipmentOutcome, StatModifier, BaseStats } from "../_types";

export const calculateEquipmentStats = (equipment: Equipment): EquipmentOutcome => {
  const stats = equipment.base.baseStats;
  const specialEffects = equipment.base.specialEffects;
  const modifier = equipment.modifier;

  const globalMultipliers: BaseStats = {
    attack: 1,
    magic: 1,
    divine: 1,
    defense: 1,
    magicDefense: 1,
    resistance: 1,
    speed: 1,
    accuracy: 1,
    critical: 1,
    evasion: 1,
  }

  modifier.statModifiers.forEach((mod: StatModifier) => {
    if(mod.calculationType === "flat"){
      stats[mod.type] += mod.value;
    }
    else if(mod.calculationType === "percentage"){
      globalMultipliers[mod.type] = 1 + mod.value;
    }
  });

  return { stats, globalMultipliers, specialEffects };
}