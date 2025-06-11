
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
}

interface ExpenseCardProps {
  title: string;
  data: ExpenseData;
  variant: "internal" | "consumer" | "total";
}

export function ExpenseCard({ title, data, variant }: ExpenseCardProps) {
  const isTotal = variant === "total";
  
  const cardVariants = {
    internal: "border-blue-200 bg-blue-50/50",
    consumer: "border-green-200 bg-green-50/50", 
    total: "border-orange-200 bg-orange-50/50 shadow-lg"
  };

  const titleVariants = {
    internal: "text-blue-900",
    consumer: "text-green-900",
    total: "text-orange-900 text-xl font-bold"
  };

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", cardVariants[variant])}>
      <CardHeader className={cn("pb-4", isTotal && "bg-orange-100/50")}>
        <CardTitle className={cn("text-lg", titleVariants[variant])}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50 border-b">
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Invoiced</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Product Expense</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Freight to Store Expense</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground"># of Invoices</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground"># of Ordering Accounts</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground"># of Items Ordered</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Avg. Order Value</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Avg. Freight to Store Expense</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Avg. # of Items/Order</th>
              </tr>
            </thead>
            <tbody>
              <tr className={cn("border-b hover:bg-muted/25 transition-colors", isTotal && "bg-white font-semibold")}>
                <td className="py-4 px-4 text-sm font-mono">{data.invoiced}</td>
                <td className="py-4 px-4 text-sm font-mono">{data.productExpense}</td>
                <td className="py-4 px-4 text-sm font-mono">{data.freightToStore}</td>
                <td className="py-4 px-4 text-sm font-mono">{data.numInvoices}</td>
                <td className="py-4 px-4 text-sm font-mono">{data.numOrderingAccounts}</td>
                <td className="py-4 px-4 text-sm font-mono">{data.numItemsOrdered}</td>
                <td className="py-4 px-4 text-sm font-mono">{data.avgOrderValue}</td>
                <td className="py-4 px-4 text-sm font-mono">{data.avgFreightToStore}</td>
                <td className="py-4 px-4 text-sm font-mono">{data.avgItemsPerOrder}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
