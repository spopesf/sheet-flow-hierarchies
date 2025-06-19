
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ExpenseData {
  invoiced?: string;
  productExpense?: string;
  freightToStore?: string;
  numInvoices?: string;
  numOrderingAccounts?: string;
  numItemsOrdered?: string;
  avgOrderValue?: string;
  avgFreightToStore?: string;
  avgItemsPerOrder?: string;
  label?: string;
  type?: string;
}

interface ExpenseTableRowProps {
  rowData: ExpenseData;
  index: number;
  isSubItem?: boolean;
  isTotal?: boolean;
  selectedFilter?: string;
  dataArray: ExpenseData[];
}

const getTooltipContent = (label: string) => {
  const definitions: Record<string, string> = {
    "Uniforms: Replenishment": "Regular uniform inventory restocking orders to maintain optimal stock levels across all store locations.",
    "Uniforms: Non-replenishment": "Special uniform orders and promotional items distributed to stores for specific campaigns and new employee onboarding.",
    "Merchandise Freight Only": "Core product inventory including retail merchandise and goods for direct customer sales.",
    "Asset Transfer": "Merchandise inventory transferred between different ownership entities or departments."
  };
  return definitions[label] || `Information about ${label}`;
};

const getCategoryIcon = (label: string) => {
  const iconMap: Record<string, { text: string; bgColor: string; textColor: string }> = {
    // Uniform Group - Blue tones (professional, uniform-like)
    "Uniforms: Replenishment": { text: "UR", bgColor: "bg-blue-600", textColor: "text-white" },
    "Uniforms: Non-replenishment": { text: "UN", bgColor: "bg-blue-400", textColor: "text-white" },
    
    // Merchandise Group - Purple tones (retail, commerce)
    "Asset Transfer": { text: "AT", bgColor: "bg-purple-600", textColor: "text-white" },
    "Merchandise Freight Only": { text: "MF", bgColor: "bg-purple-400", textColor: "text-white" }
  };
  return iconMap[label] || { text: "??", bgColor: "bg-gray-500", textColor: "text-white" };
};

const getCategoryBorderColor = (label: string) => {
  const colorMap: Record<string, string> = {
    // Uniform Group - Blue borders
    "Uniforms: Replenishment": "border-l-blue-600",
    "Uniforms: Non-replenishment": "border-l-blue-400",
    
    // Merchandise Group - Purple borders
    "Asset Transfer": "border-l-purple-600", 
    "Merchandise Freight Only": "border-l-purple-400"
  };
  return colorMap[label] || "border-l-gray-500";
};

const shouldShowNoData = (label: string | undefined, selectedFilter: string | undefined) => {
  return selectedFilter === "rsc-corporate" && 
         label && 
         (label.includes("Uniforms: Replenishment") || 
          label.includes("Uniforms: Non-replenishment") ||
          label.includes("Asset Transfer"));
};

export function ExpenseTableRow({ 
  rowData, 
  index, 
  isSubItem = false, 
  isTotal = false, 
  selectedFilter, 
  dataArray 
}: ExpenseTableRowProps) {
  // Handle section headers
  if (rowData.type === "sectionHeader") {
    return (
      <tr className="bg-slate-200 border-b-2 border-slate-300">
        <td colSpan={9} className="py-4 px-4 text-sm font-bold text-slate-800 text-left uppercase tracking-wide">
          {rowData.label}
        </td>
      </tr>
    );
  }

  const icon = rowData.label ? getCategoryIcon(rowData.label) : null;
  const borderColor = rowData.label ? getCategoryBorderColor(rowData.label) : "";
  const showNoData = shouldShowNoData(rowData.label, selectedFilter);
  const isTotalExpensesRow = rowData.label === "Total Expenses";
  const isSalesCreditRow = rowData.label === "Sales Credit";
  const isSubtotalRow = rowData.label?.startsWith("Subtotal");
  
  // Special styling logic
  const shouldShowIcon = !isTotalExpensesRow && !isSubtotalRow && !isSalesCreditRow;
  const shouldShowBorder = !isTotalExpensesRow && !isSubtotalRow && !isSalesCreditRow;
  
  return (
    <tr 
      key={`${index}-${isSubItem ? 'sub' : 'main'}`}
      className={cn(
        "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
        isTotal && "bg-white font-semibold",
        index === 0 && Array.isArray(dataArray) && !isSubItem && "font-medium",
        (index > 0 && Array.isArray(dataArray) && !isSubItem) || isSubItem && "bg-slate-50/30",
        shouldShowBorder && rowData.label && borderColor && `border-l-4 ${borderColor}`,
        showNoData && "opacity-50 bg-slate-100/50",
        isTotalExpensesRow && "font-bold bg-emerald-50 border-l-4 border-l-emerald-600",
        isSalesCreditRow && "font-bold bg-white border-l-4 border-l-rose-500",
        isSubtotalRow && "font-bold bg-slate-100 border-l-4 border-l-slate-600 border-t-2 border-t-slate-300"
      )}
    >
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {rowData.label && (
          <TooltipProvider>
            <div className={cn(
              "flex items-center gap-2 mb-1",
              isSubtotalRow && "pl-4"
            )}>
              {shouldShowIcon && (
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
              )}
              <span className={cn(
                "text-slate-700 font-sans font-medium text-xs whitespace-nowrap", 
                showNoData && "text-slate-500",
                isTotalExpensesRow && "font-bold text-emerald-800",
                isSalesCreditRow && "font-bold text-rose-700",
                isSubtotalRow && "font-bold text-slate-800 uppercase tracking-wide"
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
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {showNoData ? "—" : rowData.productExpense}
      </td>
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {showNoData ? "—" : rowData.freightToStore}
      </td>
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {showNoData ? "—" : rowData.numInvoices}
      </td>
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {showNoData ? "—" : rowData.numOrderingAccounts}
      </td>
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {showNoData ? "—" : rowData.numItemsOrdered}
      </td>
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {showNoData ? "—" : rowData.avgOrderValue}
      </td>
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {showNoData ? "—" : rowData.avgFreightToStore}
      </td>
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-emerald-800",
        isSalesCreditRow && "font-bold text-rose-700",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {showNoData ? "—" : rowData.avgItemsPerOrder}
      </td>
    </tr>
  );
}
