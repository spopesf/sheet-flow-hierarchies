
import { TableContainer } from "../shared-table/TableContainer";
import { TableHeader } from "../shared-table/TableHeader";
import { CategoryIcon } from "../shared-table/CategoryIcon";
import { TopItemsRow } from "./TopItemsRow";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface InventoryItem {
  item: string;
  upc: string;
  count: string;
  value: string;
  daysOnHand: string;
  sellThroughRate: string;
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
  { 
    label: (
      <div className="flex items-center justify-end gap-1">
        Days on Hand
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-3 h-3 rounded-full bg-slate-400 flex items-center justify-center cursor-help hover:bg-slate-500 transition-colors">
                <span className="text-white text-[10px] font-bold">?</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs text-sm">The number of days current inventory will last based on average daily usage</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ), 
    className: "text-right" 
  },
  { 
    label: (
      <div className="flex items-center justify-end gap-1">
        Sell Through Rate
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-3 h-3 rounded-full bg-slate-400 flex items-center justify-center cursor-help hover:bg-slate-500 transition-colors">
                <span className="text-white text-[10px] font-bold">?</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs text-sm">The rate at which inventory is sold over a given period</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ), 
    className: "text-right" 
  },
  { 
    label: (
      <div className="flex items-center justify-end gap-1 pr-2">
        Sales-to-<br />Stock Ratio
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-3 h-3 rounded-full bg-slate-400 flex items-center justify-center cursor-help hover:bg-slate-500 transition-colors">
                <span className="text-white text-[10px] font-bold">?</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs text-sm">Ratio comparing sales volume to available stock levels</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
    className: "text-right pr-2"
  }
];

export function TopItemsTable({ title, items, icons, itemBorderClass }: TopItemsTableProps) {
  return (
    <TableContainer title={
      <div className="flex items-center justify-between w-full">
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
        <Button variant="outline" className="justify-start font-medium tracking-tight" size="sm">
          <Download className="h-3 w-3 mr-2" />
          DOWNLOAD FULL LIST
        </Button>
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
    </TableContainer>
  );
}
