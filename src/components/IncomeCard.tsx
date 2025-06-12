
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface IncomeData {
  grossIncome: string;
  freightToCustomerExpense: string;
  salesTax: string;
  discounts: string;
  netIncome: string;
  numOrders: string;
  avgOrderValue: string;
  numOrderingAccounts: string;
  numItemsOrdered: string;
  avgOrderValueAlt: string;
  avgFreightToCustomerExpense: string;
  avgNumItemsOrder: string;
  label?: string;
}

interface IncomeCardProps {
  title: string;
  data: IncomeData;
  variant: "consumer";
  selectedFilter?: string;
  showTooltip?: boolean;
}

export function IncomeCard({ title, data, variant, selectedFilter, showTooltip = false }: IncomeCardProps) {
  // Purple merchandise icon
  const merchandiseIcon = { text: "MR", bgColor: "bg-purple-500", textColor: "text-white" };

  return (
    <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
      <CardHeader className="pb-6 border-b border-slate-100">
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold flex items-center gap-2">
          <TooltipProvider>
            <div className="flex items-center gap-2">
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
                  <p className="max-w-xs text-sm">Consumer merchandise sales data from B2C site operations</p>
                </TooltipContent>
              </Tooltip>
              Income
            </div>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[80px]">Gross Income</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px]">Freight Expense</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Sales Tax</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Discounts</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px]">Net Income</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># Orders</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg Value</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># Accounts</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># Items</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg Value</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg Freight</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg Items</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors bg-white font-semibold border-l-4 border-l-purple-500">
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.grossIncome}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.freightToCustomerExpense}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.salesTax}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.discounts}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.netIncome}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.numOrders}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.avgOrderValue}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.numOrderingAccounts}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.numItemsOrdered}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.avgOrderValueAlt}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.avgFreightToCustomerExpense}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">{data.avgNumItemsOrder}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
