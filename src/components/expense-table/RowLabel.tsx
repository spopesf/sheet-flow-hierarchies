
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CategoryIcon } from "../shared-table/CategoryIcon";
import { getCategoryIcon, getTooltipContent } from "./utils";

interface RowLabelProps {
  label: string;
  showNoData: boolean;
  shouldShowIcon: boolean;
  isSubtotalRow: boolean;
  isTotalExpensesRow: boolean;
  isSalesCreditRow: boolean;
}

export function RowLabel({ 
  label, 
  showNoData, 
  shouldShowIcon, 
  isSubtotalRow, 
  isTotalExpensesRow, 
  isSalesCreditRow 
}: RowLabelProps) {
  const icon = getCategoryIcon(label);

  return (
    <TooltipProvider>
      <div className={cn(
        "flex items-center gap-2 mb-1",
        (isSubtotalRow || isTotalExpensesRow || isSalesCreditRow) && "pl-4"
      )}>
        {shouldShowIcon && (
          <CategoryIcon
            text={icon.text}
            bgColor={icon.bgColor}
            textColor={icon.textColor}
            tooltip={getTooltipContent(label)}
            showNoData={showNoData}
          />
        )}
        <span className={cn(
          "text-slate-700 font-sans font-medium text-xs whitespace-nowrap", 
          showNoData && "text-slate-400 font-normal",
          isTotalExpensesRow && "font-bold text-slate-800 uppercase tracking-wide",
          isSalesCreditRow && "text-slate-800",
          isSubtotalRow && !showNoData && "font-bold text-slate-800 uppercase tracking-wide",
          isSubtotalRow && showNoData && "font-normal text-slate-400 uppercase tracking-wide"
        )}>
          {label}
        </span>
      </div>
    </TooltipProvider>
  );
}
