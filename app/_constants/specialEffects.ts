import { SpecialEffectData, SpecialEffectType } from "../_types";

export const SPECIAL_EFFECTS: Record<SpecialEffectType, SpecialEffectData> = {
  [SpecialEffectType.WATER_DAMAGE]: {
    type: SpecialEffectType.WATER_DAMAGE,
    localized: {
      name: {
        ja: "水属性",
        en: "Water"
      },
      description: {
        ja: "特殊な製法により、水の力を宿している。",
        en: "Convert attack to water element."
      }
    }
  },
  [SpecialEffectType.FIRE_DAMAGE]: {
    type: SpecialEffectType.FIRE_DAMAGE,
    localized: {
      name: {
        ja: "火属性",
        en: "Fire"
      },
      description: {
        ja: "特殊な製法により、火の力を宿している。",
        en: "Convert attack to fire element."
      }
    }
  },
  [SpecialEffectType.EARTH_DAMAGE]: {
    type: SpecialEffectType.EARTH_DAMAGE,
    localized: {
      name: {
        ja: "土属性",
        en: "Earth"
      },
      description: {
        ja: "特殊な製法により、土の力を宿している。",
        en: "Convert attack to earth element."
      }
    }
  },
  [SpecialEffectType.WIND_DAMAGE]: {
    type: SpecialEffectType.WIND_DAMAGE,
    localized: {
      name: {
        ja: "風属性",
        en: "Wind"
      },
      description: {
        ja: "特殊な製法により、風の力を宿している。",
        en: "Convert attack to wind element."
      }
    }
  },
  [SpecialEffectType.DEFENSE_PENETRATION]: {
    type: SpecialEffectType.DEFENSE_PENETRATION,
    localized: {
      name: {
        ja: "防御貫通",
        en: "Defense Penetration"
      },
      description: {
        ja: "武器の重量を活かした攻撃により、防御力を一定割合無視したダメージを与える。",
        en: "Penetrates a portion of enemy defense "
      }
    }
  },
  [SpecialEffectType.WATER_REDUCTION]: {
    type: SpecialEffectType.WATER_REDUCTION,
    localized: {
      name: {
        ja: "水属性軽減",
        en: "Water Resistance"
      },
      description: {
        ja: "水属性の攻撃に対する守りの魔術が施されており、ダメージを軽減する。",
        en: "Reduces damage from water attacks."
      }
    }
  },
  [SpecialEffectType.FIRE_REDUCTION]: {
    type: SpecialEffectType.FIRE_REDUCTION,
    localized: {
      name: {
        ja: "火属性軽減",
        en: "Fire Resistance"
      },
      description: {
        ja: "火属性の攻撃に対する守りの魔術が施されており、ダメージを軽減する。",
        en: "Reduces damage from fire attacks."
      }
    }
  },
  [SpecialEffectType.EARTH_REDUCTION]: {
    type: SpecialEffectType.EARTH_REDUCTION,
    localized: {
      name: {
        ja: "土属性軽減",
        en: "Earth Resistance"
      },
      description: {
        ja: "土属性の攻撃に対する守りの魔術が施されており、ダメージを軽減する。",
        en: "Reduces damage from earth attacks."
      }
    }
  },
  [SpecialEffectType.WIND_REDUCTION]: {
    type: SpecialEffectType.WIND_REDUCTION,
    localized: {
      name: {
        ja: "風属性軽減",
        en: "Wind Resistance"
      },
      description: {
        ja: "風属性の攻撃に対する守りの魔術が施されており、ダメージを軽減する。",
        en: "Reduces damage from wind attacks."
      }
    }
  },
  [SpecialEffectType.UNDEAD_REDUCTION]: {
    type: SpecialEffectType.UNDEAD_REDUCTION,
    localized: {
      name: {
        ja: "不死抵抗",
        en: "Undead Resistance"
      },
      description: {
        ja: "不死系からの攻撃に対する守りの魔術が施されており、ダメージを軽減する。",
        en: "Reduces damage from undead attacks."
      }
    }
  },
  [SpecialEffectType.SEAL_RESISTANCE]: {
    type: SpecialEffectType.SEAL_RESISTANCE,
    localized: {
      name: {
        ja: "封印耐性",
        en: "Seal Resistance"
      },
      description: {
        ja: "封印に対する耐性がつく魔術が施されており、封印になりにくくなる。",
        en: "Prevents seal status."
      }
    }
  },
  [SpecialEffectType.POISON_RESISTANCE]: {
    type: SpecialEffectType.POISON_RESISTANCE,
    localized: {
      name: {
        ja: "毒耐性",
        en: "Poison Resistance"
      },
      description: {
        ja: "毒に対する耐性がつく魔術が施されており、毒になりにくくなる。",
        en: "Prevents poison status."
      }
    }
  },
  [SpecialEffectType.PARALIZE_RESISTANCE]: {
    type: SpecialEffectType.PARALIZE_RESISTANCE,
    localized: {
      name: {
        ja: "麻痺耐性",
        en: "Paralize Resistance"
      },
      description: {
        ja: "麻痺に対する耐性がつく魔術が施されており、麻痺になりにくくなる。",
        en: "Prevents paralize status."
      }
    }
  },
  [SpecialEffectType.SLEEP_RESISTANCE]: {
    type: SpecialEffectType.SLEEP_RESISTANCE,
    localized: {
      name: {
        ja: "睡眠耐性",
        en: "Sleep Resistance"
      },
      description: {
        ja: "睡眠に対する耐性がつく魔術が施されており、睡眠になりにくくなる。",
        en: "Prevents sleep status."
      }
    }
  },
  [SpecialEffectType.DEXTERITY_CRITICAL]: {
    type: SpecialEffectType.DEXTERITY_CRITICAL,
    localized: {
      name: {
        ja: "器用会心",
        en: "Dexterity Critical"
      },
      description: {
        ja: "相手の隙を突くような攻撃により、器用が高いほど会心を発生させやすくなる。",
        en: "Increases critical rate based on dexterity."
      }
    }
  },
  [SpecialEffectType.STRENGTH_ATTACK]: {
    type: SpecialEffectType.STRENGTH_ATTACK,
    localized: {
      name: {
        ja: "剛腕補正+",
        en: "Strength Attack"
      },
      description: {
        ja: "取り扱うために力が必要な武器。装備時に装備者の攻撃力が反映されやすい。",
        en: "Increases attack based on strength."
      }
    }
  },
  [SpecialEffectType.INTELLIGENCE_DEFENSE]: {
    type: SpecialEffectType.INTELLIGENCE_DEFENSE,
    localized: {
      name: {
        ja: "知恵防壁",
        en: "Intelligence Defense"
      },
      description: {
        ja: "持ち主の知恵に反応し、知恵の一定量が防御力に上乗せされる。",
        en: "Increases defense based on divine."
      }
    },
  },
  [SpecialEffectType.DIVINE_DEFENSE]: {
    type: SpecialEffectType.DIVINE_DEFENSE,
    localized: {
      name: {
        ja: "信仰心防壁",
        en: "Intelligence Defense"
      },
      description: {
        ja: "持ち主の信仰心に反応し、信仰心の一定量が防御力に上乗せされる。",
        en: "Increases defense based on divine."
      }
    },
  },
  [SpecialEffectType.INTELLIGENCE_ATTACK]: {
    type: SpecialEffectType.INTELLIGENCE_ATTACK,
    localized: {
      name: {
        ja: "知恵変換",
        en: "Intelligence Attack"
      },
      description: {
        ja: "持ち主の知恵に反応し、知恵の一定量が攻撃力に上乗せされる。",
        en: "Increases attack based on intelligence."
      }
    }
  },
  [SpecialEffectType.STUN_CHANCE]: {
    type: SpecialEffectType.STUN_CHANCE,
    localized: {
      name: {
        ja: "気絶付与",
        en: "Stun Chance"
      },
      description: {
        ja: "衝撃などにより、明忠治に相手を気絶させることがある。",
        en: "Increases stun chance."
      }
    }
  },
  [SpecialEffectType.PARALIZE_CHANCE]: {
    type: SpecialEffectType.PARALIZE_CHANCE,
    localized: {
      name: {
        ja: "麻痺付与",
        en: "Paralize Chance"
      },
      description: {
        ja: "特定の攻撃により、相手を麻痺させることがある。",
        en: "Increases paralize chance."
      }
    }
  },
  [SpecialEffectType.DEFENSE_REDUCTION]: {
    type: SpecialEffectType.DEFENSE_REDUCTION,
    localized: {
      name: {
        ja: "防御力低下",
        en: "Defense Reduction"
      },
      description: {
        ja: "装甲を傷つけやすく、攻撃を受けた敵の防御力を低下させる。",
        en: "Reduces enemy defense."
      }
    }
  },
  [SpecialEffectType.EVASION_DAMAGE]: {
    type: SpecialEffectType.EVASION_DAMAGE,
    localized: {
      name: {
        ja: "回避ダメージ",
        en: "Evasion Damage"
      },
      description: {
        ja: "扱いやすい武器のため、回避しようとした敵に攻撃を命中させることだけはできる。\n当てただけの場合、ダメージは低い。",
        en: "Deals damage to enemy when evading."
      }
    }
  },
}