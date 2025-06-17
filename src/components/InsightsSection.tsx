

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface TopItemData {
  item: string;
  numberSold: string;
  msrp: string;
}

interface CustomerTypeData {
  type: string;
  numOrders: string;
  percentOrders: string;
  sales: string;
  percentSales: string;
  avgOrderValue: string;
}

const topItemsData: TopItemData[] = [
  { item: "Merch 1", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 2", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 3", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 4", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 5", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 6", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 7", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 8", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 9", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 10", numberSold: "x,xxx", msrp: "$ xxx" }
];

const customerTypeData: CustomerTypeData[] = [
  {
    type: "First Timer Customer",
    numOrders: "x,xxx",
    percentOrders: "xx%",
    sales: "$ x,xxx",
    percentSales: "xx%",
    avgOrderValue: "$ xxx"
  },
  {
    type: "Repeat Customer",
    numOrders: "x,xxx",
    percentOrders: "xx%",
    sales: "$ x,xxx",
    percentSales: "xx%",
    avgOrderValue: "$ xxx"
  }
];

export function InsightsSection() {
  // Purple merchandise icon for top items
  const merchandiseIcon = { text: "MR", bgColor: "bg-purple-500", textColor: "text-white" };
  
  // Pink B2C icon for customer types
  const b2cIcon = { text: "RTL", bgColor: "bg-pink-500", textColor: "text-white" };

  return (
    <div className="space-y-8 px-1">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Insights</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Top 10 Items */}
          <Card className="border-slate-200 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className={cn(
                        "w-9 h-5 rounded-full flex items-center justify-center text-xs font-bold min-w-[36px] cursor-help hover:opacity-80 transition-opacity",
                        merchandiseIcon.bgColor,
                        merchandiseIcon.textColor
                      )}>
                        {merchandiseIcon.text}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-sm">Top performing merchandise items from consumer orders</p>
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
                      <th className="text-left py-2 px-2 font-medium text-xs text-slate-600">Item</th>
                      <th className="text-left py-2 px-2 font-medium text-xs text-slate-600"># Sold</th>
                      <th className="text-left py-2 px-2 font-medium text-xs text-slate-600">MSRP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topItemsData.map((item, index) => (
                      <tr key={index} className={cn(
                        "border-b border-slate-100 hover:bg-slate-50/50 transition-colors border-l-4",
                        (item.item === "Merch 5" || item.item === "Merch 6" || item.item === "Merch 10") 
                          ? "border-l-pink-500" 
                          : "border-l-purple-500"
                      )}>
                        <td className="py-2 px-2 text-xs text-slate-800">{item.item}</td>
                        <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-800">{item.numberSold}</td>
                        <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-800">{item.msrp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* First Time Customer vs. Repeat */}
          <Card className="border-slate-200 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className={cn(
                        "w-8 h-6 rounded-md flex items-center justify-center text-xs font-bold cursor-help hover:opacity-80 transition-opacity",
                        b2cIcon.bgColor,
                        b2cIcon.textColor
                      )}>
                        {b2cIcon.text}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Retail Sales/B2C</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                First Time Customer vs. Repeat
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <th className="text-left py-2 px-1 font-medium text-xs text-slate-600 min-w-[80px]">Customer</th>
                      <th className="text-left py-2 px-1 font-medium text-xs text-slate-600 min-w-[50px]"># Orders</th>
                      <th className="text-left py-2 px-1 font-medium text-xs text-slate-600 min-w-[50px]">% Orders</th>
                      <th className="text-left py-2 px-1 font-medium text-xs text-slate-600 min-w-[50px]">Sales</th>
                      <th className="text-left py-2 px-1 font-medium text-xs text-slate-600 min-w-[50px]">% Sales</th>
                      <th className="text-left py-2 px-1 font-medium text-xs text-slate-600 min-w-[50px]">Avg Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerTypeData.map((customer, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors border-l-4 border-l-pink-500">
                        <td className="py-2 px-1 text-xs text-slate-800">{customer.type}</td>
                        <td className="py-2 px-1 text-xs font-mono tabular-nums text-slate-800">{customer.numOrders}</td>
                        <td className="py-2 px-1 text-xs font-mono tabular-nums text-slate-800">{customer.percentOrders}</td>
                        <td className="py-2 px-1 text-xs font-mono tabular-nums text-slate-800">{customer.sales}</td>
                        <td className="py-2 px-1 text-xs font-mono tabular-nums text-slate-800">{customer.percentSales}</td>
                        <td className="py-2 px-1 text-xs font-mono tabular-nums text-slate-800">{customer.avgOrderValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

