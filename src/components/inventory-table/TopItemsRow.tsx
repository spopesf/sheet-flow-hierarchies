
import { cn } from "@/lib/utils";

interface InventoryItem {
  item: string;
  upc: string;
  count: string;
  value: string;
  daysOnHand: string;
  sellThroughRate: string;
  salesToStockRatio: string;
}

interface TopItemsRowProps {
  item: InventoryItem;
  borderClass: string;
}

const getInternalOrderItemBorder = (itemName: string) => {
  // UN (Uniform Non-replenishment) items - blue-400 border
  const unItems = [
    "Staff 3", "Staff 6", "Staff 10", // Specific staff levels
    "Chipotle Goods Tote", "Foil Tee", "Crew Member T-Shirt" // Non-replenishment items
  ];
  
  // Check if item is UN
  if (unItems.some(unItem => itemName.includes(unItem))) {
    return "border-l-4 border-l-blue-400";
  }
  
  // All other internal order items are UR (Uniform Replenishment) - blue-600 border
  return "border-l-4 border-l-blue-600";
};

export function TopItemsRow({ item, borderClass }: TopItemsRowProps) {
  const actualBorderClass = borderClass === "internal" 
    ? getInternalOrderItemBorder(item.item)
    : "border-l-4 border-l-purple-500";

  return (
    <tr className={cn(
      "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
      actualBorderClass
    )}>
      <td className="py-2 px-3 text-xs font-medium text-slate-800 text-right">
        {item.item}
      </td>
      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">
        {item.upc}
      </td>
      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">
        {item.count}
      </td>
      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">
        {item.value}
      </td>
      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">
        {item.daysOnHand}
      </td>
      <td className="py-2 px-3 text-xs font-mono tabular-nums text-right text-slate-800">
        {item.sellThroughRate}
      </td>
      <td className="py-2 px-3 pr-6 text-xs font-mono tabular-nums text-right text-slate-800">
        {item.salesToStockRatio}
      </td>
    </tr>
  );
}
