
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InventorySnapshotData {
  allInventory: { count: string; value: string };
  replenishment: { count: string; value: string };
  promotional: { count: string; value: string };
  merchandiseB2B: { count: string; value: string };
  merchandiseB2C: { count: string; value: string };
}

interface InventoryItem {
  item: string;
  count: string;
  value: string;
  daysOnHand: string;
}

interface InventoryCardProps {
  snapshotData: InventorySnapshotData;
  internalOrdersItems: InventoryItem[];
  consumerOrdersItems: InventoryItem[];
}

export function InventoryCard({ snapshotData, internalOrdersItems, consumerOrdersItems }: InventoryCardProps) {
  return (
    <div className="space-y-8">
      {/* Inventory Snapshot */}
      <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
        <CardHeader className="pb-6 border-b border-slate-100">
          <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold">
            Inventory Snapshot
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left py-2 px-4 font-medium text-xs text-slate-600 tracking-wide min-w-[200px]"></th>
                  <th className="text-center py-2 px-4 font-medium text-xs text-slate-600 tracking-wide min-w-[100px]">Count</th>
                  <th className="text-center py-2 px-4 font-medium text-xs text-slate-600 tracking-wide min-w-[100px]">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-slate-800">All Inventory</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.allInventory.count}</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.allInventory.value}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-slate-800">Replenishment</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.replenishment.count}</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.replenishment.value}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-slate-800">Promotional</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.promotional.count}</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.promotional.value}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-slate-800">Merchandise (B2B)</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.merchandiseB2B.count}</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.merchandiseB2B.value}</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-slate-800">Merchandise (B2C)</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.merchandiseB2C.count}</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{snapshotData.merchandiseB2C.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Top 10 Items Tables */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top 10 Items (Internal Orders) */}
        <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold">
              Top 10 Items (internal orders)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Item</th>
                    <th className="text-center py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Count</th>
                    <th className="text-center py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Value</th>
                    <th className="text-center py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Days on Hand*</th>
                  </tr>
                </thead>
                <tbody>
                  {internalOrdersItems.map((item, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="py-2 px-3 text-xs font-medium text-slate-800">{item.item}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-center text-slate-800">{item.count}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-center text-slate-800">{item.value}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-center text-slate-800">{item.daysOnHand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Top 10 Items (Consumer Orders) */}
        <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold">
              Top 10 Items (consumer orders)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Item</th>
                    <th className="text-center py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Count</th>
                    <th className="text-center py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Value</th>
                    <th className="text-center py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Days on Hand*</th>
                  </tr>
                </thead>
                <tbody>
                  {consumerOrdersItems.map((item, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="py-2 px-3 text-xs font-medium text-slate-800">{item.item}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-center text-slate-800">{item.count}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-center text-slate-800">{item.value}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-center text-slate-800">{item.daysOnHand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
