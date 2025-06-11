
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
    internal: "border-border bg-card hover:shadow-sm",
    consumer: "border-border bg-card hover:shadow-sm", 
    total: "border-border bg-card shadow-md border-2"
  };

  const titleVariants = {
    internal: "text-foreground font-semibold",
    consumer: "text-foreground font-semibold",
    total: "text-foreground font-bold text-xl"
  };

  return (
    <Card className={cn("overflow-hidden transition-all duration-200", cardVariants[variant])}>
      <CardHeader className={cn("pb-6", isTotal && "bg-muted/30")}>
        <CardTitle className={cn("text-lg tracking-tight", titleVariants[variant])}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide">Invoiced</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide">Product Expense</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide">Freight to Store Expense</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide"># of Invoices</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide"># of Ordering Accounts</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide"># of Items Ordered</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide">Avg. Order Value</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide">Avg. Freight to Store Expense</th>
                <th className="text-left py-4 px-6 font-medium text-sm text-muted-foreground tracking-wide">Avg. # of Items/Order</th>
              </tr>
            </thead>
            <tbody>
              <tr className={cn("border-b border-border hover:bg-muted/25 transition-colors", isTotal && "bg-background font-semibold")}>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.invoiced}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.productExpense}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.freightToStore}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.numInvoices}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.numOrderingAccounts}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.numItemsOrdered}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.avgOrderValue}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.avgFreightToStore}</td>
                <td className="py-5 px-6 text-sm font-mono tabular-nums text-foreground">{data.avgItemsPerOrder}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
