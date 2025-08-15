import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopItem {
  item: string;
  numberSold: string;
  msrp: string;
}

interface TopItemsTableProps {
  title: string;
  items: TopItem[];
  variant: "wsl" | "rtl";
}

const B2BIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex items-center justify-center w-8 h-6 bg-orange-500 text-white text-xs font-bold rounded-md mr-2 cursor-help">
          WSL
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Wholesale Sales/B2B</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const B2CIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex items-center justify-center w-8 h-6 bg-pink-500 text-white text-xs font-bold rounded-md mr-2 cursor-help">
          RTL
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Retail Sales/B2C</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const wslItems: TopItem[] = [
  { item: "Merch 1", numberSold: "2,450", msrp: "$45.00" },
  { item: "Merch 2", numberSold: "1,875", msrp: "$32.50" },
  { item: "Merch 3", numberSold: "1,654", msrp: "$28.99" },
  { item: "Merch 4", numberSold: "1,432", msrp: "$55.00" },
  { item: "Merch 5", numberSold: "1,298", msrp: "$42.99" }
];

const rtlItems: TopItem[] = [
  { item: "Merch A", numberSold: "3,210", msrp: "$39.99" },
  { item: "Merch B", numberSold: "2,987", msrp: "$29.95" },
  { item: "Merch C", numberSold: "2,543", msrp: "$49.50" },
  { item: "Merch D", numberSold: "2,109", msrp: "$35.00" },
  { item: "Merch E", numberSold: "1,876", msrp: "$42.99" }
];

export function TopItemsTable({ title, variant }: TopItemsTableProps) {
  const items = variant === "wsl" ? wslItems : rtlItems;
  const borderColor = variant === "wsl" ? "border-l-orange-500" : "border-l-pink-500";
  
  return (
    <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
      <CardHeader className="pb-4 border-b border-slate-100">
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold flex items-center justify-between">
          <div className="flex items-center">
            {variant === "wsl" ? <B2BIcon /> : <B2CIcon />}
            {title}
          </div>
          <Button variant="outline" className="justify-start font-medium tracking-tight" size="sm">
            <Download className="h-3 w-3 mr-2" />
            DOWNLOAD
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Item</th>
                <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Number Sold</th>
                <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">MSRP</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className={cn(
                  "border-b border-slate-100 hover:bg-slate-50/50 transition-colors border-l-4",
                  borderColor
                )}>
                  <td className="py-2 px-3 text-xs font-medium text-slate-900">{item.item}</td>
                  <td className="py-2 px-3 text-xs font-mono tabular-nums text-slate-800 text-right">{item.numberSold}</td>
                  <td className="py-2 px-3 text-xs font-mono tabular-nums text-slate-800 text-right">{item.msrp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}