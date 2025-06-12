
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ExpenseData {
  invoiced: string;
  productExpense: string;
  freightToStore: string;
  numInvoices: string;
  numOrderingAccounts: string;
  numItemsOrdered: string;
  avgOrderValue: string;
  avgFreightToStore: string;
  avgItemsPerOrder: string;
  label?: string;
  subItems?: ExpenseData[];
}

interface ExpenseCardProps {
  title: string;
  data: ExpenseData | ExpenseData[];
  variant: "internal" | "consumer" | "total";
  selectedFilter?: string;
}

const getTooltipContent = (label: string) => {
  const definitions: Record<string, string> = {
    "Uniforms: Replenishment": "Regular uniform inventory restocking orders to maintain optimal stock levels across all store locations.",
    "Uniforms: Non-replenishment": "Special uniform orders and promotional items distributed to stores for specific campaigns and new employee onboarding.",
    "Merchandise": "Core product inventory including retail merchandise and goods for direct customer sales."
  };
  return definitions[label] || `Information about ${label}`;
};

const getCategoryIcon = (label: string) => {
  const iconMap: Record<string, { text: string; bgColor: string; textColor: string }> = {
    "Total Expenses": { text: "TE", bgColor: "bg-yellow-500", textColor: "text-white" },
    "Uniforms: Replenishment": { text: "UR", bgColor: "bg-blue-500", textColor: "text-white" },
    "Uniforms: Non-replenishment": { text: "UN", bgColor: "bg-green-500", textColor: "text-white" },
    "Merchandise": { text: "MR", bgColor: "bg-purple-500", textColor: "text-white" }
  };
  return iconMap[label] || { text: "??", bgColor: "bg-gray-500", textColor: "text-white" };
};

const getCategoryBorderColor = (label: string) => {
  const colorMap: Record<string, string> = {
    "Total Expenses": "border-l-yellow-500",
    "Uniforms: Replenishment": "border-l-blue-500",
    "Uniforms: Non-replenishment": "border-l-green-500",
    "Merchandise": "border-l-purple-500"
  };
  return colorMap[label] || "border-l-gray-500";
};

const shouldShowNoData = (label: string | undefined, selectedFilter: string | undefined) => {
  // Only show no data when RSC Corporate is selected AND the label contains "Uniforms"
  return selectedFilter === "rsc-corporate" && 
         label && 
         (label.includes("Uniforms: Replenishment") || label.includes("Uniforms: Non-replenishment"));
};

export function ExpenseCard({ title, data, variant, selectedFilter }: ExpenseCardProps) {
  const isTotal = variant === "total";
  const dataArray = Array.isArray(data) ? data : [data];
  
  const cardVariants = {
    internal: "border-slate-200 bg-white hover:shadow-md",
    consumer: "border-slate-200 bg-white hover:shadow-md", 
    total: "border-slate-300 bg-white shadow-lg border-2"
  };

  const titleVariants = {
    internal: "text-slate-900 font-semibold",
    consumer: "text-slate-900 font-semibold",
    total: "text-slate-900 font-bold text-xl"
  };

  const renderRow = (rowData: ExpenseData, index: number, isSubItem = false, parentIndex?: number) => {
    const icon = rowData.label ? getCategoryIcon(rowData.label) : null;
    const borderColor = rowData.label ? getCategoryBorderColor(rowData.label) : "";
    const showNoData = shouldShowNoData(rowData.label, selectedFilter);
    const isTotalExpensesRow = rowData.label === "Total Expenses";
    
    return (
      <tr 
        key={`${index}-${isSubItem ? 'sub' : 'main'}`}
        className={cn(
          "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
          isTotal && "bg-white font-semibold",
          index === 0 && Array.isArray(data) && !isSubItem && "font-medium",
          (index > 0 && Array.isArray(data) && !isSubItem) || isSubItem && "bg-slate-50/30",
          rowData.label && borderColor && `border-l-4 ${borderColor}`,
          showNoData && "opacity-50 bg-slate-100/50",
          isTotalExpensesRow && "font-bold"
        )}
      >
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {rowData.label && (
            <TooltipProvider>
              <div className="flex items-center gap-2 mb-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={cn(
                      "w-9 h-5 rounded-full flex items-center justify-center text-xs font-bold min-w-[36px] cursor-help hover:opacity-80 transition-opacity",
                      icon.bgColor,
                      icon.textColor,
                      showNoData && "opacity-60"
                    )}>
                      {icon.text}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">{getTooltipContent(rowData.label)}</p>
                  </TooltipContent>
                </Tooltip>
                <span className={cn(
                  "text-slate-700 font-sans font-medium text-xs whitespace-nowrap", 
                  showNoData && "text-slate-500",
                  isTotalExpensesRow && "font-bold"
                )}>
                  {rowData.label}
                </span>
              </div>
            </TooltipProvider>
          )}
          {showNoData ? "—" : rowData.invoiced}
        </td>
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {showNoData ? "—" : rowData.productExpense}
        </td>
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {showNoData ? "—" : rowData.freightToStore}
        </td>
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {showNoData ? "—" : rowData.numInvoices}
        </td>
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {showNoData ? "—" : rowData.numOrderingAccounts}
        </td>
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {showNoData ? "—" : rowData.numItemsOrdered}
        </td>
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {showNoData ? "—" : rowData.avgOrderValue}
        </td>
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {showNoData ? "—" : rowData.avgFreightToStore}
        </td>
        <td className={cn(
          "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
          isTotalExpensesRow && "font-bold"
        )}>
          {showNoData ? "—" : rowData.avgItemsPerOrder}
        </td>
      </tr>
    );
  };

  return (
    <Card className={cn("overflow-hidden transition-all duration-200", cardVariants[variant])}>
      <CardHeader className={cn("pb-6 border-b border-slate-100", isTotal && "bg-slate-50/50")}>
        <CardTitle className={cn("text-lg tracking-tight", titleVariants[variant])}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[80px] align-bottom">Invoiced</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px] align-bottom">Product Expense</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px] align-bottom">Freight to Store Expense</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom"># of Invoices</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom"># of Ordering Accounts</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom"># of Items Ordered</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom">Avg. Order Value</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom">Avg. Freight to Store Expense</th>
                <th className="text-left py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom">Avg. # of Items/Order</th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((rowData, index) => (
                <>
                  {renderRow(rowData, index)}
                  {rowData.subItems?.map((subItem, subIndex) => 
                    renderRow(subItem, subIndex, true, index)
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
