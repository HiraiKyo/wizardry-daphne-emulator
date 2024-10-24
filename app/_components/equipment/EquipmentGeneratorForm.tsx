import { BaseEquipment, EquipmentCategory } from "@/app/_types";
import { useState } from "react";
import { Button } from "../ui/button";
import { Select } from "../ui/select";
import { CATEGORY_LABELS } from "@/app/_constants/category";

const lang = "ja";

interface EquipmentGeneratorFormProps {
  onGenerate: (baseId: string, rank: number, optionCount: number) => void;
  baseEquipments: BaseEquipment[];
}

export const EquipmentGeneratorForm: React.FC<EquipmentGeneratorFormProps> = ({
  onGenerate,
  baseEquipments
}) => {
  const [selectedBase, setSelectedBase] = useState<string>('');
  const [selectedRank, setSelectedRank] = useState<number>(1);
  const [optionCount, setOptionCount] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(selectedBase, selectedRank, optionCount);
  };

  // カテゴリごとに装備をグループ化
  const groupedEquipments = baseEquipments.reduce<Record<string, BaseEquipment[]>>(
    (groups, equipment) => {
      const category = equipment.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(equipment);
      return groups;
    },
    {}
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        label="ベース装備"
        value={selectedBase}
        onChange={(e) => setSelectedBase(e.target.value)}
        required
      >
        <option value="">選択してください</option>
        {Object.entries(groupedEquipments).map(([category, equipments]) => (
          <optgroup key={category} label={CATEGORY_LABELS[category as EquipmentCategory].localized.name[lang]}>
            {equipments.map((eq) => (
              <option key={eq.id} value={eq.id}>
                {eq.localized.ja}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>

      <Select
        label="アイテムランク"
        value={selectedRank}
        onChange={(e) => setSelectedRank(Number(e.target.value))}
        required
      >
        {[1, 2, 3, 4].map((rank) => (
          <option key={rank} value={rank}>
            ★{rank}
          </option>
        ))}
      </Select>

      <Select
        label="オプション数"
        value={optionCount}
        onChange={(e) => setOptionCount(Number(e.target.value))}
        required
      >
        {[1, 2, 3, 4].map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </Select>

      <Button type="submit" disabled={!selectedBase}>
        装備を生成
      </Button>
    </form>
  );
};