import { BaseStats } from "../_types";

type StatLabel = {
  localized: {
    name: {
      ja: string;
      en: string;
    }
  }
}

export const STAT_LABELS: Record<keyof BaseStats, StatLabel> = {
  "attack": {
    localized: {
      name: {
        ja: "攻撃力",
        en: "Attack"
      }
    }
  },
  "magic": {
    localized: {
      name: {
        ja: "魔力",
        en: "Magic"
      }
    }
  },
  "divine": {
    localized: {
      name: {
        ja: "神力",
        en: "Divine"
      }
    }
  },
  "defense": {
    localized: {
      name: {
        ja: "防御力",
        en: "Defense"
      }
    }
  },
  "magicDefense": {
    localized: {
      name: {
        ja: "魔法防御力",
        en: "Magic Defense"
      }
    }
  },
  "resistance": {
    localized: {
      name: {
        ja: "抵抗",
        en: "Resistance"
      }
    }
  },
  "speed": {
    localized: {
      name: {
        ja: "行動速度",
        en: "Speed"
      }
    }
  },
  "accuracy": {
    localized: {
      name: {
        ja: "命中",
        en: "Accuracy"
      }
    }
  },
  "critical": {
    localized: {
      name: {
        ja: "会心",
        en: "Critical"
      }
    }
  },
  "evasion": {
    localized: {
      name: {
        ja: "回避",
        en: "Evasion"
      }
    }
  }
}