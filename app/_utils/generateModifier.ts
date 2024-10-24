import { ModifierRank, StatModifier, BaseStats } from "../_types";
import MODIFIERS from "../_data/modifiers.json";
export const generateModifier = (ranks: ModifierRank[]): StatModifier => {
  const chosenRank = ranks[Math.floor(Math.random() * ranks.length)];
  const calculationType = Math.random() < 0.5 ? "flat" : "percentage";
  const modifierTypes = Object.keys(MODIFIERS.statModifiers);
  const modifierType = modifierTypes[Math.floor(Math.random() * modifierTypes.length)] as keyof BaseStats;
  const modifierMaster = MODIFIERS.statModifiers[modifierType][calculationType][chosenRank-1]

  const roleValue = Math.floor(Math.random() * (modifierMaster.range.max - modifierMaster.range.min + 1)) + modifierMaster.range.min;
  return {
    type: modifierType,
    calculationType: calculationType,
    rank: chosenRank,
    value: roleValue
  };
}