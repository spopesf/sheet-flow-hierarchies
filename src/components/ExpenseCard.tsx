
import { TableContainer } from "./shared-table/TableContainer";
import { ExpenseTableHeader } from "./ExpenseTableHeader";
import { ExpenseTableBody } from "./ExpenseTableBody";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ExpenseData {
  invoiced?: string;
  productExpense?: string;
  freightToStore?: string;
  numInvoices?: string;
  numOrderingAccounts?: string;
  numItemsOrdered?: string;
  avgOrderValue?: string;
  avgFreightToStore?: string;
  avgItemsPerOrder?: string;
  label?: string;
  type?: string;
  subItems?: ExpenseData[];
}

interface ExpenseCardProps {
  title: string;
  data: ExpenseData | ExpenseData[];
  variant: "internal" | "consumer" | "total";
  selectedFilter?: string;
}

export function ExpenseCard({ title, data, variant, selectedFilter }: ExpenseCardProps) {
  const headerTitle = title === "Expense Summary by Order Type" ? (
    <div className="flex items-center justify-between w-full">
      <span>{title}</span>
      <Button variant="outline" className="justify-start font-medium tracking-tight" size="sm">
        <Download className="h-3 w-3 mr-2" />
        DOWNLOAD SPEND PER ITEM
      </Button>
    </div>
  ) : title;

  return (
    <TableContainer 
      title={headerTitle} 
      variant={variant === "total" ? "highlighted" : "default"}
      useTable={true}
    >
      <ExpenseTableHeader />
      <ExpenseTableBody 
        data={data} 
        variant={variant} 
        selectedFilter={selectedFilter} 
      />
    </TableContainer>
  );
}
