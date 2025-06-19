
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
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
              <p className="max-w-xs text-sm">{getTooltipContent(label)}</p>
            </TooltipContent>
          </Tooltip>
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
