
import { cn } from "@/lib/utils";

interface DataCellProps {
  value?: string;
  showNoData: boolean;
  isTotalExpensesRow: boolean;
  isSalesCreditRow: boolean;
  isSubtotalRow: boolean;
}

export function DataCell({ 
  value, 
  showNoData, 
  isTotalExpensesRow, 
  isSalesCreditRow, 
  isSubtotalRow 
}: DataCellProps) {
  return (
    <td className={cn(
      "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
      isTotalExpensesRow && "font-bold text-slate-800",
      isSalesCreditRow && "text-slate-800",
      isSubtotalRow && "font-bold text-slate-800"
    )}>
      {showNoData ? "—" : value}
    </td>
  );
}
