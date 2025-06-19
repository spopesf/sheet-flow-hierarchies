
import { CategoryIcon } from "../shared-table/CategoryIcon";
import { getCategoryIcon, getCategoryBorderColor, getTooltipContent } from "../shared-table/utils";
import { cn } from "@/lib/utils";

interface InventorySnapshotRowProps {
  label: string;
  data: { count: string; value: string };
  isTotal?: boolean;
}

export function InventorySnapshotRow({ label, data, isTotal = false }: InventorySnapshotRowProps) {
  const icon = getCategoryIcon(label);
  const borderColor = getCategoryBorderColor(label);
  const hasIcon = !isTotal;
  
  return (
    <tr className={cn(
      "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
      `border-l-4 ${borderColor}`,
      isTotal && "bg-slate-100"
    )}>
      <td className={cn(
        "py-3 px-4 text-xs text-slate-800",
        isTotal ? "font-bold" : "font-medium"
      )}>
        {hasIcon ? (
          <div className="flex items-center gap-2 mb-1">
            <CategoryIcon 
              text={icon.text}
              bgColor={icon.bgColor}
              textColor={icon.textColor}
              tooltip={getTooltipContent(label)}
            />
            <span className="text-slate-700 font-sans font-medium text-xs">
              {label}
            </span>
          </div>
        ) : (
          <span className={cn(
            "text-slate-700 font-sans text-xs",
            isTotal && "font-bold text-slate-800 uppercase tracking-wide pl-4"
          )}>
            {label}
          </span>
        )}
      </td>
      <td className={cn(
        "py-3 px-4 text-xs font-mono tabular-nums text-right text-slate-800",
        isTotal && "font-bold"
      )}>
        {data.count}
      </td>
      <td className={cn(
        "py-3 px-4 text-xs font-mono tabular-nums text-right text-slate-800",
        isTotal && "font-bold"
      )}>
        {data.value}
      </td>
    </tr>
  );
}
