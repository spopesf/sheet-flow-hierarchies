
import { cn } from "@/lib/utils";

interface TableHeaderProps {
  columns: Array<{
    label: string;
    className?: string;
    minWidth?: string;
  }>;
}

export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead>
      <tr className="border-b border-slate-100 bg-slate-50">
        {columns.map((column, index) => (
          <th
            key={index}
            className={cn(
              "text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide align-bottom",
              column.minWidth && `min-w-[${column.minWidth}]`,
              column.className
            )}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
