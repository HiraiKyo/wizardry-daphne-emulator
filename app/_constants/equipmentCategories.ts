import { CategoryInfo, EquipmentSlot, WeaponCategory, ArmorCategory } from '../_types';

export const CATEGORY_INFO: Record<WeaponCategory | ArmorCategory, CategoryInfo> = {
  // 武器
  [WeaponCategory.ONE_HANDED_SWORD]: {
    id: WeaponCategory.ONE_HANDED_SWORD,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: false,
    weight: 'MEDIUM',
  },
  [WeaponCategory.TWO_HANDED_SWORD]: {
    id: WeaponCategory.TWO_HANDED_SWORD,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: true,
    weight: 'HEAVY'
  },
  [WeaponCategory.ONE_HANDED_AXE]: {
    id: WeaponCategory.ONE_HANDED_AXE,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: false,
    weight: 'MEDIUM'
  },
  [WeaponCategory.TWO_HANDED_AXE]: {
    id: WeaponCategory.TWO_HANDED_AXE,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: true,
    weight: 'HEAVY'
  },
  [WeaponCategory.DAGGER]: {
    id: WeaponCategory.DAGGER,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: false,
    weight: 'LIGHT'
  },
  [WeaponCategory.ONE_HANDED_STAFF]: {
    id: WeaponCategory.ONE_HANDED_STAFF,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: false,
    weight: 'MEDIUM'
  },
  [WeaponCategory.TWO_HANDED_STAFF]: {
    id: WeaponCategory.TWO_HANDED_STAFF,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: true,
    weight: 'HEAVY'
  },
  [WeaponCategory.TWO_HANDED_SPEAR]: {
    id: WeaponCategory.TWO_HANDED_SPEAR,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: true,
    weight: 'HEAVY'
  },
  [WeaponCategory.ONE_HANDED_HALBERD]: {
    id: WeaponCategory.ONE_HANDED_HALBERD,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: false,
    weight: 'MEDIUM'
  },
  [WeaponCategory.TWO_HANDED_HALBERD]: {
    id: WeaponCategory.TWO_HANDED_HALBERD,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: true,
    weight: 'HEAVY'
  },
  [WeaponCategory.BOW]: {
    id: WeaponCategory.BOW,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: true,
    weight: 'MEDIUM'
  },
  [WeaponCategory.THROWABLE]: {
    id: WeaponCategory.THROWABLE,
    slot: EquipmentSlot.MAIN_HAND,
    isTwoHanded: false,
    weight: 'LIGHT'
  },
  [WeaponCategory.BUCKLER]: {
    id: WeaponCategory.BUCKLER,
    slot: EquipmentSlot.OFF_HAND,
    weight: 'LIGHT'
  },
  [WeaponCategory.SHIELD]: {
    id: WeaponCategory.SHIELD,
    slot: EquipmentSlot.OFF_HAND,
    weight: 'MEDIUM'
  },
  [WeaponCategory.TOWER_SHIELD]: {
    id: WeaponCategory.TOWER_SHIELD,
    slot: EquipmentSlot.OFF_HAND,
    weight: 'HEAVY'
  },

  // 防具 - 頭部
  [ArmorCategory.HAT]: {
    id: ArmorCategory.HAT,
    slot: EquipmentSlot.HEAD,
    weight: 'LIGHT'
  },
  [ArmorCategory.LIGHT_HELM]: {
    id: ArmorCategory.LIGHT_HELM,
    slot: EquipmentSlot.HEAD,
    weight: 'MEDIUM'
  },
  [ArmorCategory.HEAVY_HELM]: {
    id: ArmorCategory.HEAVY_HELM,
    slot: EquipmentSlot.HEAD,
    weight: 'HEAVY'
  },
  // 防具 - 胴体
  [ArmorCategory.CLOTHES]: {
    id: ArmorCategory.CLOTHES,
    slot: EquipmentSlot.BODY,
    weight: 'LIGHT'
  },
  [ArmorCategory.LIGHT_ARMOR]: {
    id: ArmorCategory.LIGHT_ARMOR,
    slot: EquipmentSlot.BODY,
    weight: 'MEDIUM'
  },
  [ArmorCategory.HEAVY_ARMOR]: {
    id: ArmorCategory.HEAVY_ARMOR,
    slot: EquipmentSlot.BODY,
    weight: 'HEAVY'
  },
  // 防具 - 手
  [ArmorCategory.GLOVES]: {
    id: ArmorCategory.GLOVES,
    slot: EquipmentSlot.HANDS,
    weight: 'LIGHT'
  },
  [ArmorCategory.LIGHT_GAUNTLET]: {
    id: ArmorCategory.LIGHT_GAUNTLET,
    slot: EquipmentSlot.HANDS,
    weight: 'MEDIUM'
  },
  [ArmorCategory.HEAVY_GAUNTLET]: {
    id: ArmorCategory.HEAVY_GAUNTLET,
    slot: EquipmentSlot.HANDS,
    weight: 'HEAVY'
  },
  // 防具 - 足
  [ArmorCategory.BOOTS]: {
    id: ArmorCategory.BOOTS,
    slot: EquipmentSlot.BOOTS,
    weight: 'LIGHT'
  },
  [ArmorCategory.LIGHT_GREAVES]: {
    id: ArmorCategory.LIGHT_GREAVES,
    slot: EquipmentSlot.BOOTS,
    weight: 'MEDIUM'
  },
  [ArmorCategory.HEAVY_GREAVES]: {
    id: ArmorCategory.HEAVY_GREAVES,
    slot: EquipmentSlot.BOOTS,
    weight: 'HEAVY'
  },
  // 防具 - 装飾品
  [ArmorCategory.ACCESSORY]: {
    id: ArmorCategory.ACCESSORY,
    slot: EquipmentSlot.ACCESSORY,
    weight: 'LIGHT'
  }
};