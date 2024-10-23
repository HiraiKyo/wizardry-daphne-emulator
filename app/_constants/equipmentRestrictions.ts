import { JobEquipmentRestrictions, JobClass, WeaponCategory, ArmorCategory } from '../_types';

export const JOB_EQUIPMENT_RESTRICTIONS: Record<JobClass, JobEquipmentRestrictions> = {
  [JobClass.WARRIOR]: { allowedCategories: [
      // 武器
      WeaponCategory.ONE_HANDED_SWORD,
      WeaponCategory.TWO_HANDED_SWORD,
      WeaponCategory.ONE_HANDED_AXE,
      WeaponCategory.TWO_HANDED_AXE,
      WeaponCategory.BOW,
      WeaponCategory.ONE_HANDED_STAFF,
      WeaponCategory.TWO_HANDED_STAFF,
      WeaponCategory.DAGGER,
      WeaponCategory.TWO_HANDED_SPEAR,
      WeaponCategory.ONE_HANDED_HALBERD,
      WeaponCategory.TWO_HANDED_HALBERD,
      WeaponCategory.BUCKLER,
      WeaponCategory.SHIELD,
      WeaponCategory.TOWER_SHIELD,
      WeaponCategory.THROWABLE,
      // 防具
      ArmorCategory.HAT,
      ArmorCategory.LIGHT_HELM,
      ArmorCategory.HEAVY_HELM,
      ArmorCategory.CLOTHES,
      ArmorCategory.LIGHT_ARMOR,
      ArmorCategory.HEAVY_ARMOR,
      ArmorCategory.GLOVES,
      ArmorCategory.LIGHT_GAUNTLET,
      ArmorCategory.HEAVY_GAUNTLET,
      ArmorCategory.BOOTS,
      ArmorCategory.LIGHT_GREAVES,
      ArmorCategory.HEAVY_GREAVES,
      ArmorCategory.ACCESSORY
    ]
  },
  [JobClass.KNIGHT]: { allowedCategories: [
      // 武器
      WeaponCategory.ONE_HANDED_SWORD,
      WeaponCategory.TWO_HANDED_SWORD,
      WeaponCategory.ONE_HANDED_AXE,
      WeaponCategory.TWO_HANDED_AXE,
      WeaponCategory.BOW,
      WeaponCategory.ONE_HANDED_STAFF,
      WeaponCategory.TWO_HANDED_STAFF,
      WeaponCategory.DAGGER,
      WeaponCategory.TWO_HANDED_SPEAR,
      WeaponCategory.ONE_HANDED_HALBERD,
      WeaponCategory.TWO_HANDED_HALBERD,
      WeaponCategory.BUCKLER,
      WeaponCategory.SHIELD,
      WeaponCategory.TOWER_SHIELD,
      WeaponCategory.THROWABLE,
      // 防具
      ArmorCategory.HAT,
      ArmorCategory.LIGHT_HELM,
      ArmorCategory.HEAVY_HELM,
      ArmorCategory.CLOTHES,
      ArmorCategory.LIGHT_ARMOR,
      ArmorCategory.HEAVY_ARMOR,
      ArmorCategory.GLOVES,
      ArmorCategory.LIGHT_GAUNTLET,
      ArmorCategory.HEAVY_GAUNTLET,
      ArmorCategory.BOOTS,
      ArmorCategory.LIGHT_GREAVES,
      ArmorCategory.HEAVY_GREAVES,
      ArmorCategory.ACCESSORY
    ]},
    [JobClass.THIEF]:{ allowedCategories: [
      // 武器
      WeaponCategory.ONE_HANDED_SWORD,
      WeaponCategory.TWO_HANDED_SWORD,
      WeaponCategory.BOW,
      WeaponCategory.ONE_HANDED_STAFF,
      WeaponCategory.DAGGER,
      WeaponCategory.ONE_HANDED_HALBERD,
      WeaponCategory.BUCKLER,
      WeaponCategory.SHIELD,
      WeaponCategory.THROWABLE,
      // 防具
      ArmorCategory.HAT,
      ArmorCategory.LIGHT_HELM,
      ArmorCategory.CLOTHES,
      ArmorCategory.LIGHT_ARMOR,
      ArmorCategory.GLOVES,
      ArmorCategory.LIGHT_GAUNTLET,
      ArmorCategory.BOOTS,
      ArmorCategory.LIGHT_GREAVES,
      ArmorCategory.ACCESSORY
    ]},
 [JobClass.PRIEST]: { allowedCategories: [
      // 武器
      WeaponCategory.ONE_HANDED_STAFF,
      WeaponCategory.TWO_HANDED_STAFF,
      WeaponCategory.ONE_HANDED_HALBERD,
      WeaponCategory.TWO_HANDED_HALBERD,
      WeaponCategory.THROWABLE,
      WeaponCategory.BUCKLER,
      WeaponCategory.SHIELD,
      // 防具
      ArmorCategory.HAT,
      ArmorCategory.LIGHT_HELM,
      ArmorCategory.CLOTHES,
      ArmorCategory.LIGHT_ARMOR,
      ArmorCategory.GLOVES,
      ArmorCategory.LIGHT_GAUNTLET,
      ArmorCategory.BOOTS,
      ArmorCategory.LIGHT_GREAVES,
      ArmorCategory.ACCESSORY
    ]},
 [JobClass.MAGE]: { allowedCategories: [
      // 武器
      WeaponCategory.ONE_HANDED_STAFF,
      WeaponCategory.TWO_HANDED_STAFF,
      WeaponCategory.DAGGER,
      WeaponCategory.THROWABLE,
      WeaponCategory.BUCKLER,
      // 防具
      ArmorCategory.HAT,
      ArmorCategory.CLOTHES,
      ArmorCategory.GLOVES,
      ArmorCategory.BOOTS,
      ArmorCategory.ACCESSORY
    ]}
  };