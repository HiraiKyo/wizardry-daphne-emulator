"use client";

import Image from "next/image";
import { generateEquipment } from "./_utils/generateEquipment";
import { useState } from "react";
import { BaseEquipment, Equipment, ModifierRank } from "./_types";
import BASE_EQUIPMENTS from "./_data/equipment.json";
import { EquipmentCard } from "./_components/equipment/EquipmentCard";
import { EquipmentGeneratorForm } from "./_components/equipment/EquipmentGeneratorForm";
import { Button } from "./_components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./_components/ui/card";

const baseEquipments = BASE_EQUIPMENTS.equipment as BaseEquipment[];

export default function Home() {
  const [generatedEquipment, setGeneratedEquipment] = useState<Equipment | null>(null);
  const [generationHistory, setGenerationHistory] = useState<Equipment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (
    baseId: string,
    rank: number,
    optionCount: number
  ) => {
    setIsLoading(true);
    try {
      const baseEquipment = baseEquipments.find(eq => eq.id === baseId) as BaseEquipment;
      const equipment = generateEquipment(baseEquipment, rank as ModifierRank, optionCount);

      setGeneratedEquipment(equipment);
      setGenerationHistory(prev => [equipment, ...prev].slice(0, 5)); // 最新5件を保持
    } catch (error) {
      console.error('Equipment generation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          装備ジェネレータ
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 生成フォーム */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>装備生成</CardTitle>
            </CardHeader>
            <CardContent>
              <EquipmentGeneratorForm
                onGenerate={handleGenerate}
                baseEquipments={baseEquipments}
              />
            </CardContent>
          </Card>

          {/* 生成結果 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 最新の生成結果 */}
            {isLoading ? (
              <Card>
                <CardContent className="flex justify-center items-center h-48">
                  <div className="text-gray-500">生成中...</div>
                </CardContent>
              </Card>
            ) : generatedEquipment ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">生成結果</h2>
                <EquipmentCard 
                  equipment={generatedEquipment}
                  className="border-2 border-blue-200"
                />
              </div>
            ) : (
              <Card>
                <CardContent className="flex justify-center items-center h-48">
                  <div className="text-gray-500">
                    装備を生成してください
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 生成履歴 */}
            {generationHistory.length > 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">生成履歴</h2>
                <div className="space-y-4">
                  {generationHistory.slice(1).map((equipment, index) => (
                    <EquipmentCard
                      key={`${equipment.base.id}-${index}`}
                      equipment={equipment}
                      className="opacity-75 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* オプションパネル（追加機能用） */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>生成オプション</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  onClick={() => setGenerationHistory([])}
                  disabled={generationHistory.length === 0}
                >
                  履歴をクリア
                </Button>
                {/* 追加のオプションボタンをここに配置 */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Copyright @ 2024 HiraiKyo Reserved.
      </footer>
    </div>
  );
}
