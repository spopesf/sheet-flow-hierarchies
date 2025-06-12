
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExpenseTableHeader } from "./ExpenseTableHeader";
import { ExpenseTableBody } from "./ExpenseTableBody";

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
  label?: string;
  subItems?: ExpenseData[];
}

interface ExpenseCardProps {
  title: string;
  data: ExpenseData | ExpenseData[];
  variant: "internal" | "consumer" | "total";
  selectedFilter?: string;
}

export function ExpenseCard({ title, data, variant, selectedFilter }: ExpenseCardProps) {
  const isTotal = variant === "total";
  
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
            <ExpenseTableHeader />
            <ExpenseTableBody 
              data={data} 
              variant={variant} 
              selectedFilter={selectedFilter} 
            />
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
