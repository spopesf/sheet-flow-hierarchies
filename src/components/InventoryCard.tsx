import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

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

const getCategoryIcon = (label: string) => {
  const iconMap: Record<string, { text: string; bgColor: string; textColor: string }> = {
    "Uniforms: Replenishment": { text: "UR", bgColor: "bg-blue-500", textColor: "text-white" },
    "Uniforms: Non-replenishment": { text: "UN", bgColor: "bg-green-500", textColor: "text-white" },
    "Merchandise (B2B)": { text: "MR", bgColor: "bg-purple-500", textColor: "text-white" },
    "Merchandise (B2C)": { text: "MR", bgColor: "bg-purple-500", textColor: "text-white" }
  };
  return iconMap[label] || null;
};

const getCategoryBorderColor = (label: string) => {
  const colorMap: Record<string, string> = {
    "All Inventory": "border-l-yellow-500",
    "Uniforms: Replenishment": "border-l-blue-500",
    "Uniforms: Non-replenishment": "border-l-green-500",
    "Merchandise (B2B)": "border-l-purple-500",
    "Merchandise (B2C)": "border-l-purple-500"
  };
  return colorMap[label] || "";
};

const getTooltipContent = (label: string) => {
  const definitions: Record<string, string> = {
    "Uniforms: Replenishment": "Regular uniform inventory restocking orders to maintain optimal stock levels across all store locations.",
    "Uniforms: Non-replenishment": "Special uniform orders and promotional items distributed to stores for specific campaigns and new employee onboarding.",
    "Merchandise (B2B)": "Business-to-business merchandise inventory for wholesale and corporate sales.",
    "Merchandise (B2C)": "Business-to-consumer merchandise inventory for direct retail sales."
  };
  return definitions[label] || `Information about ${label}`;
};

const getInternalOrderItemBorder = (itemName: string) => {
  // Staff 1, 2, 4, 5, 7, 8, 9 get blue border (UR)
  // Staff 3, 6, 10 get green border (UN)
  if (itemName.includes("Staff 3") || itemName.includes("Staff 6") || itemName.includes("Staff 10")) {
    return "border-l-4 border-l-green-500";
  } else if (itemName.includes("Staff")) {
    return "border-l-4 border-l-blue-500";
  }
  return "";
};

const renderInventoryRow = (label: string, data: { count: string; value: string }) => {
  const icon = getCategoryIcon(label);
  const borderColor = getCategoryBorderColor(label);
  const isAllInventory = label === "All Inventory";
  
  return (
    <tr key={label} className={cn(
      "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
      borderColor && `border-l-4 ${borderColor}`
    )}>
      <td className={cn(
        "py-3 px-4 text-xs text-slate-800",
        isAllInventory ? "font-bold" : "font-medium"
      )}>
        {icon && (
          <TooltipProvider>
            <div className="flex items-center gap-2 mb-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={cn(
                    "w-9 h-5 rounded-full flex items-center justify-center text-xs font-bold min-w-[36px] cursor-help hover:opacity-80 transition-opacity",
                    icon.bgColor,
                    icon.textColor
                  )}>
                    {icon.text}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">{getTooltipContent(label)}</p>
                </TooltipContent>
              </Tooltip>
              <span className="text-slate-700 font-sans font-medium text-xs">
                {label}
              </span>
            </div>
          </TooltipProvider>
        )}
        {!icon && label}
      </td>
      <td className={cn(
        "py-3 px-4 text-xs font-mono tabular-nums text-right text-slate-800",
        isAllInventory && "font-bold"
      )}>{data.count}</td>
      <td className={cn(
        "py-3 px-4 text-xs font-mono tabular-nums text-right text-slate-800",
        isAllInventory && "font-bold"
      )}>{data.value}</td>
    </tr>
  );
};

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
                  <th className="text-right py-2 px-4 font-medium text-xs text-slate-600 tracking-wide min-w-[200px]"></th>
                  <th className="text-right py-2 px-4 font-medium text-xs text-slate-600 tracking-wide min-w-[100px]">Count</th>
                  <th className="text-right py-2 px-4 font-medium text-xs text-slate-600 tracking-wide min-w-[100px]">Value</th>
                </tr>
              </thead>
              <tbody>
                {renderInventoryRow("All Inventory", snapshotData.allInventory)}
                {renderInventoryRow("Uniforms: Replenishment", snapshotData.replenishment)}
                {renderInventoryRow("Uniforms: Non-replenishment", snapshotData.promotional)}
                {renderInventoryRow("Merchandise (B2B)", snapshotData.merchandiseB2B)}
                {renderInventoryRow("Merchandise (B2C)", snapshotData.merchandiseB2C)}
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
            <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold flex items-center gap-2">
              <TooltipProvider>
                <div className="flex items-center gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-9 h-5 rounded-full flex items-center justify-center text-xs font-bold min-w-[36px] cursor-help hover:opacity-80 transition-opacity bg-blue-500 text-white">
                        UR
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-sm">Uniform replenishment items from internal orders</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-9 h-5 rounded-full flex items-center justify-center text-xs font-bold min-w-[36px] cursor-help hover:opacity-80 transition-opacity bg-green-500 text-white">
                        UN
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-sm">Uniform non-replenishment items from internal orders</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
              Top 10 Items
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Item</th>
                    <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Count</th>
                    <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Value</th>
                    <th className="text-right py-2 px-3 pr-6 font-medium text-xs text-slate-600 tracking-wide">
                      <div className="flex items-center gap-1 justify-end">
                        Days on Hand
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="w-4 h-4 rounded-full bg-slate-400 flex items-center justify-center cursor-help hover:bg-slate-500 transition-colors">
                                <span className="text-white text-xs font-bold">?</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-sm">The number of days current inventory will last based on average daily usage</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {internalOrdersItems.map((item, index) => (
                    <tr key={index} className={cn(
                      "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
                      getInternalOrderItemBorder(item.item)
                    )}>
                      <td className="py-2 px-3 text-xs font-medium text-slate-800 text-right">{item.item}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">{item.count}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">{item.value}</td>
                      <td className="py-2 px-3 pr-20 text-xs font-mono tabular-nums text-right text-slate-800">{item.daysOnHand}</td>
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
            <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-9 h-5 rounded-full flex items-center justify-center text-xs font-bold min-w-[36px] cursor-help hover:opacity-80 transition-opacity bg-purple-500 text-white">
                      MR
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">Merchandise items from consumer orders</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              Top 10 Items
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Item</th>
                    <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Count</th>
                    <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Value</th>
                    <th className="text-right py-2 px-3 pr-6 font-medium text-xs text-slate-600 tracking-wide">
                      <div className="flex items-center gap-1 justify-end">
                        Days on Hand
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="w-4 h-4 rounded-full bg-slate-400 flex items-center justify-center cursor-help hover:bg-slate-500 transition-colors">
                                <span className="text-white text-xs font-bold">?</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-sm">The number of days current inventory will last based on average daily usage</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {consumerOrdersItems.map((item, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors border-l-4 border-l-purple-500">
                      <td className="py-2 px-3 text-xs font-medium text-slate-800 text-right">{item.item}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">{item.count}</td>
                      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">{item.value}</td>
                      <td className="py-2 px-3 pr-20 text-xs font-mono tabular-nums text-right text-slate-800">{item.daysOnHand}</td>
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
