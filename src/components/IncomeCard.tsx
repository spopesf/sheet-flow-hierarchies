

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
  dataB2C?: IncomeData;
  variant: "consumer";
  selectedFilter?: string;
  showTooltip?: boolean;
}

const B2BIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex items-center justify-center w-8 h-6 bg-orange-500 text-white text-xs font-bold rounded-md mr-3 cursor-help">
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
        <div className="inline-flex items-center justify-center w-8 h-6 bg-pink-500 text-white text-xs font-bold rounded-md mr-3 cursor-help">
          RTL
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Retail Sales/B2C</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export function IncomeCard({ title, data, dataB2C, variant, selectedFilter, showTooltip = false }: IncomeCardProps) {
  const merchandiseIcon = { text: "MR", bgColor: "bg-purple-500", textColor: "text-white" };
  
  // Use provided dataB2C or fallback to data for the second row
  const b2cData = dataB2C || data;

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
                  <p className="max-w-xs text-sm">Merchandise (non-uniform) on any platform</p>
                </TooltipContent>
              </Tooltip>
              Merchandise Summary by Sales Channel
            </div>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"></th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[80px]">Gross Income</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px]">Freight Expense</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Sales Tax</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Discounts</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px]">Net Income</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># Orders</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg Value</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># Accounts</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># Items</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg Value</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg Freight</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg Items</th>
              </tr>
            </thead>
            <tbody>
              {/* B2B Row */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors bg-white font-semibold border-l-4 border-l-orange-500">
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">
                  <B2BIcon />
                </td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.grossIncome}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.freightToCustomerExpense}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.salesTax}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.discounts}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.netIncome}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.numOrders}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.avgOrderValue}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.numOrderingAccounts}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.numItemsOrdered}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.avgOrderValueAlt}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.avgFreightToCustomerExpense}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{data.avgNumItemsOrder}</td>
              </tr>
              {/* B2C Row */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors bg-white font-semibold border-l-4 border-l-pink-500">
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">
                  <B2CIcon />
                </td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.grossIncome}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.freightToCustomerExpense}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.salesTax}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.discounts}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.netIncome}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.numOrders}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.avgOrderValue}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.numOrderingAccounts}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.numItemsOrdered}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.avgOrderValueAlt}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.avgFreightToCustomerExpense}</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">{b2cData.avgNumItemsOrder}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

