import { JOB_EQUIPMENT_RESTRICTIONS } from "../_constants/equipmentRestrictions";
import { CATEGORY_INFO } from "../_constants/equipmentCategories";
import { BaseEquipment, EquipmentSlot, JobClass } from "../_types";

export const checkEquipmentCompatibility = (
  job: JobClass,
  currentEquipment: Record<EquipmentSlot, BaseEquipment | null>,
  newEquipment: BaseEquipment,
  slot: EquipmentSlot
): { compatible: boolean; reason?: string } => {
  const categoryInfo = CATEGORY_INFO[newEquipment.category];

  // 両手持ち武器のチェック
  if (categoryInfo.isTwoHanded) {
    if (currentEquipment[EquipmentSlot.OFF_HAND]) {
      return {
        compatible: false,
        reason: 'Cannot equip two-handed weapon while using off-hand equipment'
      };
    }
  }

  // オフハンド装備と両手持ち武器のチェック
  if (slot === EquipmentSlot.OFF_HAND) {
    const mainHandEquip = currentEquipment[EquipmentSlot.MAIN_HAND];
    if (mainHandEquip && CATEGORY_INFO[mainHandEquip.category].isTwoHanded) {
      return {
        compatible: false,
        reason: 'Cannot equip off-hand item while using two-handed weapon'
      };
    }
  }

  return { compatible: true };
};

export const checkEquipmentRestrictions = (
  job: JobClass,
  newEquipment: BaseEquipment
): { compatible: boolean; reason?: string } => {
  const restrictions = JOB_EQUIPMENT_RESTRICTIONS[job];
  if (!restrictions.allowedCategories.includes(
    newEquipment.category
  )){
    return {
      compatible: false,
      reason: 'This equipment is not allowed for this job'
    };
  }
  return { compatible: true };
}