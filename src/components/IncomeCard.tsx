

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface IncomeData {
  grossIncome: string;
  productSales: string;
  freight: string;
  salesTax: string;
  allowanceSpent: string;
  discounts: string;
  netIncome: string;
  numOrders: string;
  avgValue: string;
  numAccounts: string;
  numItems: string;
  avgFreight: string;
  avgNumItems: string;
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
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[80px]"></th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[80px]">Gross Income</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[80px]">Product Sales</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Freight</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Sales Tax</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[80px]">Allowance Spent</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Discounts</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px]">Net Income</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># of Orders</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg. Value</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># of Accounts</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]"># of Items</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg. Freight</th>
                <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px]">Avg. # of Items</th>
              </tr>
            </thead>
            <tbody>
              {/* TOTAL Row */}
              <tr className="border-b border-slate-200 bg-slate-100 font-bold border-l-4 border-l-purple-500">
                <td className="py-3 px-2 text-xs font-bold text-slate-900">TOTAL</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$144,548.85</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$116,371.98</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$25,020.85</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$3,156.02</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$53,780.17</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">-$115.00</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$154,701.67</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">2,434</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">129.27</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">2,552</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">7,540</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">19</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">6</td>
              </tr>

              {/* WSL Row */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors border-l-4 border-l-orange-500">
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">
                  <B2BIcon />
                </td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$105,765.17</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$82,041.88</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$23,723.29</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$0.00</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$53,780.17</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$0.00</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$105,765.17</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">1,293</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">81.80</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">1,377</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">5,847</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">17</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">4</td>
              </tr>

              {/* WSL Refunds Row */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors text-slate-600 border-l-4 border-l-orange-500">
                <td className="py-2 px-2 text-xs italic text-slate-600 pl-8">Refunds</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-$12,765.90</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-$12,314.40</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-$451.50</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">$0.00</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
              </tr>

              {/* WSL SUBTOTAL Row */}
              <tr className="border-b border-slate-200 bg-slate-50 font-semibold border-l-4 border-l-orange-500">
                <td className="py-2 px-2 text-xs font-semibold text-slate-900">SUBTOTAL</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$92,999.27</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$69,727.48</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$23,271.79</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$0.00</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$53,780.17</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$0.00</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$105,765.17</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">1,293</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">81.80</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">1,377</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">5,847</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">17</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">4</td>
              </tr>

              {/* RTL Row */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors border-l-4 border-l-pink-500">
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800">
                  <B2CIcon />
                </td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$54,160.65</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$49,051.50</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$1,766.50</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$3,342.65</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">-</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">-$115.00</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">$48,936.50</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">1,141</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">47.47</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">1,175</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">1,693</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">2</td>
                <td className="py-3 px-2 text-xs font-mono tabular-nums text-slate-800 text-right">1</td>
              </tr>

              {/* RTL Refunds Row */}
              <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors text-slate-600 border-l-4 border-l-pink-500">
                <td className="py-2 px-2 text-xs italic text-slate-600 pl-8">Refunds</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-$2,611.07</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-$2,407.00</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-$17.44</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-$186.63</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-600 text-right">-</td>
              </tr>

              {/* RTL SUBTOTAL Row */}
              <tr className="border-b border-slate-200 bg-slate-50 font-semibold border-l-4 border-l-pink-500">
                <td className="py-2 px-2 text-xs font-semibold text-slate-900">SUBTOTAL</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$51,549.58</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$46,644.50</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$1,749.06</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$3,156.02</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">-</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">-$115.00</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">$48,936.50</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">1,141</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">47.47</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">1,175</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">1,693</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">2</td>
                <td className="py-2 px-2 text-xs font-mono tabular-nums text-slate-900 text-right">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

