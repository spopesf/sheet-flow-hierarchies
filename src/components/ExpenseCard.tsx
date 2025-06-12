
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExpenseData {
  invoiced: string;
  productExpense: string;
  freightToStore: string;
  numInvoices: string;
  numOrderingAccounts: string;
  numItemsOrdered: string;
  avgOrderValue: string;
  avgFreightToStore: string;
  avgItemsPerOrder: string;
  label?: string; // Optional label for sub-rows
}

interface ExpenseCardProps {
  title: string;
  data: ExpenseData | ExpenseData[];
  variant: "internal" | "consumer" | "total";
}

export function ExpenseCard({ title, data, variant }: ExpenseCardProps) {
  const isTotal = variant === "total";
  const dataArray = Array.isArray(data) ? data : [data];
  
  const cardVariants = {
    internal: "border-slate-200 bg-white hover:shadow-md",
    consumer: "border-slate-200 bg-white hover:shadow-md", 
    total: "border-slate-300 bg-white shadow-lg border-2"
  };

  const titleVariants = {
    internal: "text-slate-900 font-semibold",
    consumer: "text-slate-900 font-semibold",
    total: "text-slate-900 font-bold text-xl"
  };

  return (
    <Card className={cn("overflow-hidden transition-all duration-200", cardVariants[variant])}>
      <CardHeader className={cn("pb-6 border-b border-slate-100", isTotal && "bg-slate-50/50")}>
        <CardTitle className={cn("text-lg tracking-tight", titleVariants[variant])}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Invoiced</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Product Expense</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Freight to Store Expense</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide"># of Invoices</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide"># of Ordering Accounts</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide"># of Items Ordered</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Avg. Order Value</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Avg. Freight to Store Expense</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-slate-600 tracking-wide">Avg. # of Items/Order</th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((rowData, index) => (
                <tr 
                  key={index}
                  className={cn(
                    "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
                    isTotal && "bg-white font-semibold",
                    index === 0 && Array.isArray(data) && "font-medium", // First row is slightly emphasized for parent
                    index > 0 && Array.isArray(data) && "bg-slate-50/30" // Sub-rows have slight background
                  )}
                >
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">
                    {rowData.label && index > 0 && (
                      <span className="text-slate-600 font-sans mr-2">↳</span>
                    )}
                    {rowData.invoiced}
                  </td>
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{rowData.productExpense}</td>
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{rowData.freightToStore}</td>
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{rowData.numInvoices}</td>
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{rowData.numOrderingAccounts}</td>
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{rowData.numItemsOrdered}</td>
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{rowData.avgOrderValue}</td>
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{rowData.avgFreightToStore}</td>
                  <td className="py-5 px-6 text-sm font-mono tabular-nums text-slate-800">{rowData.avgItemsPerOrder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
