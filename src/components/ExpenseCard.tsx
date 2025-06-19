
import { TableContainer } from "./shared-table/TableContainer";
import { ExpenseTableHeader } from "./ExpenseTableHeader";
import { ExpenseTableBody } from "./ExpenseTableBody";

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
  return (
    <TableContainer 
      title={title} 
      variant={variant === "total" ? "highlighted" : "default"}
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
