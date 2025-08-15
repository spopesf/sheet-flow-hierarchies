
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
  if (itemName.includes("Staff 3") || itemName.includes("Staff 6") || itemName.includes("Staff 10")) {
    return "border-l-4 border-l-blue-400";
  } else if (itemName.includes("Staff")) {
    return "border-l-4 border-l-blue-600";
  }
  return "";
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
