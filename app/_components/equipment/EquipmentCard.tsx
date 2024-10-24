import { BaseStats, Equipment, EquipmentSlot } from '@/app/_types';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { SPECIAL_EFFECTS } from '@/app/_constants/specialEffects';
import { STAT_LABELS } from '@/app/_constants/stats';
import MODIFIERS from "@/app/_data/modifiers.json";
import { ToggledJson } from '../ui/ToggleJson';

interface EquipmentCardProps {
  equipment: Equipment;
  className?: string;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({ 
  equipment, 
  className = '' 
}) => {
  const formatStatValue = (value: number) => {
    return value > 0 ? `+${value}` : value.toString();
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <span>{equipment.base.localized.ja}</span>
            <span className="text-yellow-500">
              {"★".repeat(equipment.modifier.rank)}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* 基本ステータス */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">基本ステータス</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(equipment.base.baseStats)
              // .filter(([_, value]) => value !== 0)
              .map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span>{STAT_LABELS[key as keyof BaseStats].localized.name.ja}:</span>
                  <span className={value > 0 ? 'text-blue-600' : 'text-red-600'}>
                    {formatStatValue(value)}{equipment.base.slot === EquipmentSlot.MAIN_HAND && key == "attack" ? `x${equipment.base.hitCount}` : ""}
                  </span>
                </div>
              ))
            }
          </div>
        </div>

        {/* オプション効果 */}
        {equipment.modifier.statModifiers.length > 0 && (
          <div className="mb-4">
            <h3 className="font-medium mb-2">オプション効果</h3>
            <div className="space-y-1 text-sm">
              {equipment.modifier.statModifiers.map((mod, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                  <span>{STAT_LABELS[mod.type as keyof BaseStats].localized.name.ja}:</span>
                  <span className="text-blue-600">
                    {formatStatValue(mod.value)}
                    {mod.calculationType === 'percentage' ? '%' : ''}
                  </span>
                  </div>
                  <div className="flex center">
                    <span className="text-gray-600">
                      (ランク{mod.rank}:
                        {MODIFIERS.statModifiers[mod.type][mod.calculationType].find((v) => v.rank === mod.rank)?.range.min}
                        -
                        {MODIFIERS.statModifiers[mod.type][mod.calculationType].find((v) => v.rank === mod.rank)?.range.max}
                      )
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 特殊効果 */}
        {equipment.base.specialEffects.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">特殊効果</h3>
            <div className="space-y-1 text-sm">
              {equipment.base.specialEffects.map((effect, index) => (
                <div key={index}>
                  <div className="text-purple-600">
                    {SPECIAL_EFFECTS[effect].localized.name.ja}
                  </div>
                  <div className="text-sm text-gray-600">
                    {SPECIAL_EFFECTS[effect].localized.description.ja}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JSON string をToggleで表示*/}
        <ToggledJson json={equipment} />
      </CardContent>
    </Card>
  );
};