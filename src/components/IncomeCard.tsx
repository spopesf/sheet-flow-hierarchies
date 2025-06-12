
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

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
  return (
    <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
      <CardHeader className="pb-6 border-b border-slate-100">
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold flex items-center gap-2">
          {title}
          {showTooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-help">
                    <Info className="h-4 w-4 text-slate-500" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">Consumer merchandise sales data from B2C site operations</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Gross Income</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Freight to Customer Expense</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Sales Tax</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Discounts</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Net Income</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide"># of Orders</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Avg Order Value</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide"># of Ordering Accounts</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide"># of Items Ordered</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Avg Order Value</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Avg Freight to Customer Expense</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Avg # of Items/Order</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors bg-white font-semibold">
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.grossIncome}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.freightToCustomerExpense}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.salesTax}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.discounts}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.netIncome}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.numOrders}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.avgOrderValue}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.numOrderingAccounts}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.numItemsOrdered}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.avgOrderValueAlt}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.avgFreightToCustomerExpense}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{data.avgNumItemsOrder}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
