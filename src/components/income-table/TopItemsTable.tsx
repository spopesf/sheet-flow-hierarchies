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
  type?: "top" | "bottom";
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
  { item: "Merch 5", numberSold: "1,298", msrp: "$42.99" },
  { item: "Merch 6", numberSold: "1,156", msrp: "$38.50" },
  { item: "Merch 7", numberSold: "1,087", msrp: "$47.25" },
  { item: "Merch 8", numberSold: "998", msrp: "$29.99" },
  { item: "Merch 9", numberSold: "945", msrp: "$52.00" },
  { item: "Merch 10", numberSold: "876", msrp: "$34.75" },
  { item: "Merch 11", numberSold: "834", msrp: "$41.50" },
  { item: "Merch 12", numberSold: "789", msrp: "$36.99" },
  { item: "Merch 13", numberSold: "723", msrp: "$48.75" },
  { item: "Merch 14", numberSold: "687", msrp: "$33.25" },
  { item: "Merch 15", numberSold: "654", msrp: "$44.99" },
  { item: "Merch 16", numberSold: "612", msrp: "$39.50" },
  { item: "Merch 17", numberSold: "578", msrp: "$31.75" },
  { item: "Merch 18", numberSold: "543", msrp: "$46.25" },
  { item: "Merch 19", numberSold: "512", msrp: "$37.99" },
  { item: "Merch 20", numberSold: "487", msrp: "$43.50" },
  { item: "Merch 21", numberSold: "456", msrp: "$35.75" },
  { item: "Merch 22", numberSold: "423", msrp: "$49.99" },
  { item: "Merch 23", numberSold: "398", msrp: "$32.25" },
  { item: "Merch 24", numberSold: "367", msrp: "$40.50" },
  { item: "Merch 25", numberSold: "334", msrp: "$38.75" }
];

const rtlItems: TopItem[] = [
  { item: "Merch A", numberSold: "3,210", msrp: "$39.99" },
  { item: "Merch B", numberSold: "2,987", msrp: "$29.95" },
  { item: "Merch C", numberSold: "2,543", msrp: "$49.50" },
  { item: "Merch D", numberSold: "2,109", msrp: "$35.00" },
  { item: "Merch E", numberSold: "1,876", msrp: "$42.99" },
  { item: "Merch F", numberSold: "1,743", msrp: "$37.50" },
  { item: "Merch G", numberSold: "1,612", msrp: "$44.25" },
  { item: "Merch H", numberSold: "1,489", msrp: "$33.75" },
  { item: "Merch I", numberSold: "1,367", msrp: "$41.99" },
  { item: "Merch J", numberSold: "1,254", msrp: "$36.50" },
  { item: "Merch K", numberSold: "1,143", msrp: "$48.25" },
  { item: "Merch L", numberSold: "1,076", msrp: "$31.99" },
  { item: "Merch M", numberSold: "987", msrp: "$45.75" },
  { item: "Merch N", numberSold: "923", msrp: "$34.25" },
  { item: "Merch O", numberSold: "876", msrp: "$39.99" },
  { item: "Merch P", numberSold: "821", msrp: "$43.50" },
  { item: "Merch Q", numberSold: "789", msrp: "$32.75" },
  { item: "Merch R", numberSold: "745", msrp: "$46.99" },
  { item: "Merch S", numberSold: "698", msrp: "$35.50" },
  { item: "Merch T", numberSold: "654", msrp: "$41.25" },
  { item: "Merch U", numberSold: "612", msrp: "$38.99" },
  { item: "Merch V", numberSold: "578", msrp: "$44.75" },
  { item: "Merch W", numberSold: "534", msrp: "$33.50" },
  { item: "Merch X", numberSold: "498", msrp: "$47.25" },
  { item: "Merch Y", numberSold: "456", msrp: "$36.75" }
];

const wslBottomItems: TopItem[] = [
  { item: "Low Merch 1", numberSold: "45", msrp: "$12.99" },
  { item: "Low Merch 2", numberSold: "38", msrp: "$8.50" },
  { item: "Low Merch 3", numberSold: "32", msrp: "$15.25" },
  { item: "Low Merch 4", numberSold: "28", msrp: "$9.99" },
  { item: "Low Merch 5", numberSold: "25", msrp: "$11.75" },
  { item: "Low Merch 6", numberSold: "22", msrp: "$7.50" },
  { item: "Low Merch 7", numberSold: "19", msrp: "$13.99" },
  { item: "Low Merch 8", numberSold: "17", msrp: "$6.25" },
  { item: "Low Merch 9", numberSold: "15", msrp: "$10.50" },
  { item: "Low Merch 10", numberSold: "13", msrp: "$8.99" },
  { item: "Low Merch 11", numberSold: "12", msrp: "$14.25" },
  { item: "Low Merch 12", numberSold: "10", msrp: "$5.75" },
  { item: "Low Merch 13", numberSold: "9", msrp: "$12.50" },
  { item: "Low Merch 14", numberSold: "8", msrp: "$7.99" },
  { item: "Low Merch 15", numberSold: "7", msrp: "$11.25" },
  { item: "Low Merch 16", numberSold: "6", msrp: "$9.50" },
  { item: "Low Merch 17", numberSold: "5", msrp: "$6.75" },
  { item: "Low Merch 18", numberSold: "4", msrp: "$13.25" },
  { item: "Low Merch 19", numberSold: "3", msrp: "$8.25" },
  { item: "Low Merch 20", numberSold: "3", msrp: "$10.99" },
  { item: "Low Merch 21", numberSold: "2", msrp: "$7.25" },
  { item: "Low Merch 22", numberSold: "2", msrp: "$12.75" },
  { item: "Low Merch 23", numberSold: "1", msrp: "$5.99" },
  { item: "Low Merch 24", numberSold: "1", msrp: "$9.75" },
  { item: "Low Merch 25", numberSold: "1", msrp: "$6.50" }
];

const rtlBottomItems: TopItem[] = [
  { item: "Low Merch AA", numberSold: "52", msrp: "$14.99" },
  { item: "Low Merch BB", numberSold: "41", msrp: "$9.95" },
  { item: "Low Merch CC", numberSold: "35", msrp: "$16.50" },
  { item: "Low Merch DD", numberSold: "31", msrp: "$11.00" },
  { item: "Low Merch EE", numberSold: "27", msrp: "$13.99" },
  { item: "Low Merch FF", numberSold: "24", msrp: "$8.50" },
  { item: "Low Merch GG", numberSold: "21", msrp: "$15.25" },
  { item: "Low Merch HH", numberSold: "18", msrp: "$7.75" },
  { item: "Low Merch II", numberSold: "16", msrp: "$12.99" },
  { item: "Low Merch JJ", numberSold: "14", msrp: "$10.50" },
  { item: "Low Merch KK", numberSold: "13", msrp: "$17.25" },
  { item: "Low Merch LL", numberSold: "11", msrp: "$6.99" },
  { item: "Low Merch MM", numberSold: "10", msrp: "$14.75" },
  { item: "Low Merch NN", numberSold: "9", msrp: "$9.25" },
  { item: "Low Merch OO", numberSold: "8", msrp: "$11.99" },
  { item: "Low Merch PP", numberSold: "7", msrp: "$13.50" },
  { item: "Low Merch QQ", numberSold: "6", msrp: "$8.75" },
  { item: "Low Merch RR", numberSold: "5", msrp: "$15.99" },
  { item: "Low Merch SS", numberSold: "4", msrp: "$10.50" },
  { item: "Low Merch TT", numberSold: "3", msrp: "$12.25" },
  { item: "Low Merch UU", numberSold: "3", msrp: "$7.99" },
  { item: "Low Merch VV", numberSold: "2", msrp: "$14.75" },
  { item: "Low Merch WW", numberSold: "2", msrp: "$9.50" },
  { item: "Low Merch XX", numberSold: "1", msrp: "$16.25" },
  { item: "Low Merch YY", numberSold: "1", msrp: "$8.75" }
];

export function TopItemsTable({ title, variant, type = "top" }: TopItemsTableProps) {
  const getItems = () => {
    if (type === "bottom") {
      return variant === "wsl" ? wslBottomItems : rtlBottomItems;
    }
    return variant === "wsl" ? wslItems : rtlItems;
  };
  
  const items = getItems();
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
            DOWNLOAD FULL LIST
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Item</th>
                <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Number of Items Sold</th>
                <th className="text-right py-2 px-3 font-medium text-xs text-slate-600 tracking-wide">Sales</th>
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