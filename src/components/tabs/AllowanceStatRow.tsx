import { cn } from "@/lib/utils";

interface AllowanceStatRowProps {
  label: string;
  value: string;
  isTotal?: boolean;
  valueColor?: string;
}

export function AllowanceStatRow({ label, value, isTotal = false, valueColor }: AllowanceStatRowProps) {
  return (
    <tr className={cn(
      "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
      "border-l-4 border-l-slate-300",
      isTotal && "bg-slate-100"
    )}>
      <td className={cn(
        "py-3 px-4 text-xs text-slate-800",
        isTotal ? "font-bold" : "font-medium"
      )}>
        <span className={cn(
          "text-slate-700 font-sans text-xs",
          isTotal && "font-bold text-slate-800 uppercase tracking-wide pl-4"
        )}>
          {label}
        </span>
      </td>
      <td className={cn(
        "py-3 px-4 text-xs font-mono tabular-nums text-right",
        isTotal && "font-bold",
        valueColor || "text-slate-800"
      )}>
        {value}
      </td>
    </tr>
  );
}