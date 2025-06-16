
import { cn } from "@/lib/utils";

export function ExpenseTableHeader() {
  return (
    <thead>
      <tr className="border-b border-slate-100 bg-slate-50">
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[80px] align-bottom">Invoiced</th>
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px] align-bottom">Product Expense</th>
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[70px] align-bottom">Freight Expense</th>
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom"># of Invoices</th>
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom"># of Ordering Accounts</th>
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom"># of Items Ordered</th>
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom">Avg. Order Value</th>
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom">Avg Freight</th>
        <th className="text-right py-2 px-2 font-medium text-xs text-slate-600 tracking-wide min-w-[60px] align-bottom">Avg. # of Items/Order</th>
      </tr>
    </thead>
  );
}
