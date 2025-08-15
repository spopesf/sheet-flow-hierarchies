
import { TableContainer } from "../shared-table/TableContainer";
import { TableHeader } from "../shared-table/TableHeader";
import { CategoryIcon } from "../shared-table/CategoryIcon";
import { TopItemsRow } from "./TopItemsRow";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface InventoryItem {
  item: string;
  upc: string;
  count: string;
  value: string;
  daysOnHand: string;
  salesToStockRatio: string;
}

interface TopItemsTableProps {
  title: string;
  items: InventoryItem[];
  icons: Array<{ text: string; bgColor: string; textColor: string; tooltip: string }>;
  itemBorderClass: string;
}

const columns = [
  { label: "Item", className: "text-right" },
  { label: "UPC", className: "text-right" },
  { label: "Count", className: "text-right" },
  { label: "Value", className: "text-right" },
  { label: "Days on Hand", className: "text-right" },
  { 
    label: "Sales-to-Stock Ratio",
    className: "text-right pr-6"
  }
];

export function TopItemsTable({ title, items, icons, itemBorderClass }: TopItemsTableProps) {
  return (
    <TableContainer title={
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {icons.map((icon, index) => (
            <CategoryIcon
              key={index}
              text={icon.text}
              bgColor={icon.bgColor}
              textColor={icon.textColor}
              tooltip={icon.tooltip}
            />
          ))}
        </div>
        {title}
      </div>
    }>
      <table className="w-full">
        <TableHeader columns={columns} />
        <tbody>
          {items.map((item, index) => (
            <TopItemsRow 
              key={index}
              item={item}
              borderClass={itemBorderClass}
            />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end pr-6 pb-2">
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
    </TableContainer>
  );
}
