import { BaseEquipment, Equipment, EquipmentModifier, ModifierRank } from "../_types";
import { generateModifier } from "./generateModifier";

export const generateEquipment = (baseEquipment: BaseEquipment, rank: ModifierRank, optionCount: number ): Equipment => {
  if (optionCount < 0 || optionCount > 5) {
    throw new Error('Option count must be between 0 and 4');
  }

  const modifier: EquipmentModifier = {
    rank: rank,
    enhanceLevel: 0,
    optionCount: optionCount,
    statModifiers: []
  };

  const ranks = range(1, rank);

  for(let i = 0; i < optionCount; i++){
    modifier.statModifiers.push(generateModifier(ranks));
  }
  return {
    base: baseEquipment,
    modifier: modifier
  };
}

const range = (min: number, max: number): ModifierRank[] => {
  return Array.from({ length: max - min + 1 }, (_, i) => (i + min) as ModifierRank);
}