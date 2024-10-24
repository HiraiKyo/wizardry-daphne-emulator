// 職業の定義
export enum JobClass {
  WARRIOR = 'WARRIOR',           // 戦士
  KNIGHT = 'KNIGHT',            // 騎士
  THIEF = 'THIEF',              // 盗賊
  MAGE = 'MAGE',                // 魔法使い
  PRIEST = 'PRIEST',            // 僧侶
}

// 職業ごとの装備可能カテゴリ定義
export interface JobEquipmentRestrictions {
  allowedCategories: EquipmentCategory[];
}

// 装備スロットの定義
export enum EquipmentSlot {
  MAIN_HAND = 'MAIN_HAND',      // メイン武器
  OFF_HAND = 'OFF_HAND',        // オフハンド/盾
  HEAD = 'HEAD',                // 頭部
  BODY = 'BODY',                // 胴体
  HANDS = 'HANDS',              // 手
  BOOTS = 'BOOTS',                // 足
  ACCESSORY = 'ACCESSORY'       // 装飾品
}

// 武器カテゴリの定義
export enum WeaponCategory {
  ONE_HANDED_SWORD = 'ONE_HANDED_SWORD',    // 片手剣
  TWO_HANDED_SWORD = 'TWO_HANDED_SWORD',    // 両手剣
  ONE_HANDED_AXE = 'ONE_HANDED_AXE',        // 片手斧
  TWO_HANDED_AXE = 'TWO_HANDED_AXE',        // 両手斧
  DAGGER = 'DAGGER',                        // 短剣
  ONE_HANDED_STAFF = 'ONE_HANDED_STAFF',    // 杖
  TWO_HANDED_STAFF = 'TWO_HANDED_STAFF',    // 両手杖
  TWO_HANDED_SPEAR = 'TWO_HANDED_SPEAR',    // 両手槍
  ONE_HANDED_HALBERD = 'ONE_HANDED_HALBERD',// 鎚矛
  TWO_HANDED_HALBERD = 'TWO_HANDED_HALBERD',// 両手鎚矛
  BOW = 'BOW',                              // 弓
  THROWABLE = 'THROWABLE',                  // 投擲武器
  BUCKLER = 'BUCKLER',                      // 小盾
  SHIELD = 'SHIELD',                        // 盾
  TOWER_SHIELD = 'TOWER_SHIELD'             // 大盾
}

// 防具カテゴリの定義
export enum ArmorCategory {
  // 頭部防具
  HAT = 'HAT',                  // 帽子
  LIGHT_HELM = 'LIGHT_HELM',    // 軽兜
  HEAVY_HELM = 'HEAVY_HELM',    // 重兜

  // 胴体防具
  CLOTHES = 'CLOTHES',          // 衣服
  LIGHT_ARMOR = 'LIGHT_ARMOR',  // 軽鎧
  HEAVY_ARMOR = 'HEAVY_ARMOR',  // 重鎧

  // 手防具
  GLOVES = 'GLOVES',            // 手袋
  LIGHT_GAUNTLET = 'LIGHT_GAUNTLET',  // 軽篭手
  HEAVY_GAUNTLET = 'HEAVY_GAUNTLET',  // 重篭手

  // 足防具
  BOOTS = 'BOOTS',              // 靴
  LIGHT_GREAVES = 'LIGHT_GREAVES',    // 軽足鎧
  HEAVY_GREAVES = 'HEAVY_GREAVES',    // 重足鎧

  // 装飾品
  ACCESSORY = 'ACCESSORY'       // 装飾品
}

// 装備カテゴリの種類
export type EquipmentCategory = WeaponCategory | ArmorCategory;
// 装備カテゴリの共通インターフェース
export interface CategoryInfo {
  id: EquipmentCategory;
  slot: EquipmentSlot;
  isTwoHanded?: boolean;  // 武器の場合、両手持ちかどうか
  weight: 'LIGHT' | 'MEDIUM' | 'HEAVY';  // 装備の重さ区分
}


// 完全な装備情報
export interface Equipment {
  base: BaseEquipment;
  modifier: EquipmentModifier;
}

export interface EquipmentOutcome {
  stats: BaseStats;
  globalMultipliers: BaseStats;
  specialEffects: SpecialEffectType[];
}

// 装備のベース情報
export interface BaseEquipment {
  id: string;
  name: string;
  localized: {
    ja: string;
    en: string;
  },
  hitCount?: number;                // 攻撃回数（武器のみ）
  category: EquipmentCategory;
  slot: EquipmentSlot;
  baseStats: BaseStats;
  maxEnhanceLevel: number;
  specialEffects: SpecialEffectType[];
}


export type BaseStats = {
  attack: number;
  magic: number;
  divine: number;
  defense: number;
  magicDefense: number;
  resistance: number;
  speed: number;
  accuracy: number;
  critical: number;
  evasion: number;
}

export enum SpecialEffectType {
  // ダメージ
  WATER_DAMAGE = "WATER_DAMAGE",
  FIRE_DAMAGE = "FIRE_DAMAGE",
  EARTH_DAMAGE = "EARTH_DAMAGE",
  WIND_DAMAGE = "WIND_DAMAGE",
  DEFENSE_PENETRATION = "DEFENSE_PENETRATION",

  // 耐性
  WATER_REDUCTION = "WATER_REDUCTION",
  FIRE_REDUCTION = "FIRE_REDUCTION",
  EARTH_REDUCTION = "EARTH_REDUCTION",
  WIND_REDUCTION = "WIND_REDUCTION",
  UNDEAD_REDUCTION = "UNDEAD_REDUCTION",
  SEAL_RESISTANCE = "SEAL_RESISTANCE",
  POISON_RESISTANCE = "POISON_RESISTANCE",
  PARALIZE_RESISTANCE = "PARALIZE_RESISTANCE",
  SLEEP_RESISTANCE = "SLEEP_RESISTANCE",

  // スタッツ変換
  DEXTERITY_CRITICAL = "DEXTERITY_CRITICAL",
  STRENGTH_ATTACK = "STRENGTH_ATTACK",
  INTELLIGENCE_ATTACK = "INTELLIGENCE_ATTACK",
  INTELLIGENCE_DEFENSE = "INTELLIGENCE_DEFENSE",
  DIVINE_DEFENSE = "DIVINE_DEFENSE",

  // デバフ付与
  STUN_CHANCE = "STUN_CHANCE",
  PARALIZE_CHANCE = "PARALIZE_CHANCE",
  DEFENSE_REDUCTION = "DEFENSE_REDUCTION",

  // 特殊効果
  EVASION_DAMAGE = "EVASION_DAMAGE",
}

export interface SpecialEffect {
  type: SpecialEffectType;
  value: number;  // 効果値（例：水属性ダメージ15%軽減なら15）
}

export interface SpecialEffectData {
  type: SpecialEffectType;
  localized: {
    name: {
      ja: string;
      en: string;
    },
    description: {
      ja: string;
      en: string;
    }
  };
}

// オプション効果の種類
export type StatModifierType = keyof BaseStats;

// オプション効果の計算タイプ
export type CalculationType = 'flat' | 'percentage';

// オプション効果のランク定義
export type ModifierRank = 1 | 2 | 3 | 4 ;

// 実際の装備に付与されるオプション効果
export interface StatModifier {
  type: StatModifierType;
  calculationType: CalculationType;
  rank: ModifierRank;
  value: number;  // 実際に振られた値
}

// オプション効果の値の範囲
export interface ModifierRange {
  min: number;
  max: number;
}

// オプション効果のランクごとの値範囲
export interface ModifierRankRange {
  rank: ModifierRank;
  range: ModifierRange;
}

// StatModifierMasterの修正版
export type StatModifierMaster = {
  [K in keyof BaseStats]: {
    flat: ModifierRankRange[];
    percentage: ModifierRankRange[];
  };
};

// 装備のモディファイア情報
export interface EquipmentModifier {
  rank: 1 | 2 | 3 | 4 | 5;  // 星の数
  enhanceLevel: number;     // 強化レベル（0-20）
  optionCount: number;      // オプションの数
  statModifiers: StatModifier[];  // オプション効果のリスト
}