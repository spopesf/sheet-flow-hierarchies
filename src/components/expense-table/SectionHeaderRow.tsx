
import { cn } from "@/lib/utils";

interface SectionHeaderRowProps {
  label: string;
}

export function SectionHeaderRow({ label }: SectionHeaderRowProps) {
  const isUniformExpensesSection = label === "Uniform Expenses";
  const isMerchandiseSection = label === "Merchandise";
  
  return (
    <tr className={cn(
      "bg-slate-50 border-b border-slate-100",
      (isUniformExpensesSection || isMerchandiseSection) && "border-t-2 border-t-slate-300"
    )}>
      <td colSpan={9} className="py-2 px-2 text-xs font-medium text-slate-600 tracking-wide text-left">
        {label}
      </td>
    </tr>
  );
}
