import { Equipment } from '@/app/_types';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

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
            <span>{equipment.base.name}</span>
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
              .filter(([_, value]) => value !== 0)
              .map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span>{key}:</span>
                  <span className={value > 0 ? 'text-blue-600' : 'text-red-600'}>
                    {formatStatValue(value)}
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
                <div key={index} className="flex justify-between">
                  <span>{mod.type}:</span>
                  <span className="text-blue-600">
                    {formatStatValue(mod.value)}
                    {mod.calculationType === 'percentage' ? '%' : ''}
                  </span>
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
                <div key={index} className="text-purple-600">
                  {effect}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};