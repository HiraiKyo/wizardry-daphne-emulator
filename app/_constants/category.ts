import { EquipmentCategory, WeaponCategory, ArmorCategory } from "@/app/_types";

type CategoryLabel = {
  localized: {
    name: {
      ja: string;
      en: string;
    }
  }
}

export const CATEGORY_LABELS: Record<EquipmentCategory, CategoryLabel> = {
  [WeaponCategory.ONE_HANDED_SWORD]: {
    localized: {
      name: {
        ja: "片手剣",
        en: "One-Handed Sword"
      }
    }
  },
  [WeaponCategory.TWO_HANDED_SWORD]: {
    localized: {
      name: {
        ja: "両手剣",
        en: "Two-Handed Sword"
      }
    }
  },
  [WeaponCategory.ONE_HANDED_AXE]: {
    localized: {
      name: {
        ja: "片手斧",
        en: "One-Handed Axe"
      }
    }
  },
  [WeaponCategory.TWO_HANDED_AXE]: {
    localized: {
      name: {
        ja: "両手斧",
        en: "Two-Handed Axe"
      }
    }
  },
  [WeaponCategory.DAGGER]: {
    localized: {
      name: {
        ja: "短剣",
        en: "Dagger"
      }
    }
  },
  [WeaponCategory.ONE_HANDED_STAFF]: {
    localized: {
      name: {
        ja: "杖",
        en: "One-Handed Staff"
      }
    }
  },
  [WeaponCategory.TWO_HANDED_STAFF]: {
    localized: {
      name: {
        ja: "両手杖",
        en: "Two-Handed Staff"
      }
    }
  },
  [WeaponCategory.TWO_HANDED_SPEAR]: {
    localized: {
      name: {
        ja: "両手槍",
        en: "Two-Handed Spear"
      }
    }
  },
  [WeaponCategory.ONE_HANDED_HALBERD]: {
    localized: {
      name: {
        ja: "鎚矛",
        en: "One-Handed Halberd"
      }
    }
  },
  [WeaponCategory.TWO_HANDED_HALBERD]: {
    localized: {
      name: {
        ja: "両手鎚矛",
        en: "Two-Handed Halberd"
      }
    }
  },
  [WeaponCategory.BOW]: {
    localized: {
      name: {
        ja: "弓",
        en: "Bow"
      }
    }
  },
  [WeaponCategory.THROWABLE]: {
    localized: {
      name: {
        ja: "投擲武器",
        en: "Throwable"
      }
    }
  },
  [WeaponCategory.BUCKLER]: {
    localized: {
      name: {
        ja: "小盾",
        en: "Buckler"
      }
    }
  },
  [WeaponCategory.SHIELD]: {
    localized: {
      name: {
        ja: "盾",
        en: "Shield"
      }
    }
  },
  [WeaponCategory.TOWER_SHIELD]: {
    localized: {
      name: {
        ja: "大盾",
        en: "Tower Shield"
      }
    }
  },
  [ArmorCategory.HAT]: {
    localized: {
      name: {
        ja: "帽子",
        en: "Hat"
      }
    }
  },
  [ArmorCategory.LIGHT_HELM]: {
    localized: {
      name: {
        ja: "軽兜",
        en: "Light Helm"
      }
    }
  },
  [ArmorCategory.HEAVY_HELM]: {
    localized: {
      name: {
        ja: "重兜",
        en: "Heavy Helm"
      }
    }
  },
  [ArmorCategory.CLOTHES]: {
    localized: {
      name: {
        ja: "衣服",
        en: "Clothes"
      }
    }
  },
  [ArmorCategory.LIGHT_ARMOR]: {
    localized: {
      name: {
        ja: "軽鎧",
        en: "Light Armor"
      }
    }
  },
  [ArmorCategory.HEAVY_ARMOR]: {
    localized: {
      name: {
        ja: "重鎧",
        en: "Heavy Armor"
      }
    }
  },
  [ArmorCategory.GLOVES]: {
    localized: {
      name: {
        ja: "手袋",
        en: "Gloves"
      }
    }
  },
  [ArmorCategory.LIGHT_GAUNTLET]: {
    localized: {
      name: {
        ja: "軽篭手",
        en: "Light Gauntlet"
      }
    }
  },
  [ArmorCategory.HEAVY_GAUNTLET]: {
    localized: {
      name: {
        ja: "重篭手",
        en: "Heavy Gauntlet"
      }
    }
  },
  [ArmorCategory.BOOTS]: {
    localized: {
      name: {
        ja: "靴",
        en: "Boots"
      }
    }
  },
  [ArmorCategory.LIGHT_GREAVES]: {
    localized: {
      name: {
        ja: "軽足鎧",
        en: "Light Greaves"
      }
    }
  },
  [ArmorCategory.HEAVY_GREAVES]: {
    localized: {
      name: {

        ja: "重足鎧",
        en: "Heavy Greaves"
      }
    }
  },
  [ArmorCategory.ACCESSORY]: {
    localized: {
      name: {
        ja: "装飾品",
        en: "Accessory"
      }
    }
  }
}