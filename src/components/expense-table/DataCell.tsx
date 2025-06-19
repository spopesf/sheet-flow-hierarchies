
import { cn } from "@/lib/utils";

interface DataCellProps {
  value?: string;
  showNoData: boolean;
  isTotalExpensesRow: boolean;
  isSalesCreditRow: boolean;
  isSubtotalRow: boolean;
  isCurrency?: boolean;
}

export function DataCell({ 
  value, 
  showNoData, 
  isTotalExpensesRow, 
  isSalesCreditRow, 
  isSubtotalRow,
  isCurrency = false
}: DataCellProps) {
  const formatValue = (val: string | undefined) => {
    if (showNoData || !val || val === "—") return "—";
    if (isCurrency && val !== "—") {
      return val.startsWith("$") ? val : `$${val}`;
    }
    return val;
  };

  return (
    <td className={cn(
      "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
      isTotalExpensesRow && "font-bold text-slate-800",
      isSalesCreditRow && "text-slate-800",
      isSubtotalRow && "font-bold text-slate-800"
    )}>
      {formatValue(value)}
    </td>
  );
}
