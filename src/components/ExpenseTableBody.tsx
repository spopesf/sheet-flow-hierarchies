
import { ExpenseTableRow } from "./ExpenseTableRow";

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
}

interface ExpenseTableBodyProps {
  data: ExpenseData | ExpenseData[];
  variant: "internal" | "consumer" | "total";
  selectedFilter?: string;
}

export function ExpenseTableBody({ data, variant, selectedFilter }: ExpenseTableBodyProps) {
  const isTotal = variant === "total";
  const dataArray = Array.isArray(data) ? data : [data];

  return (
    <tbody>
      {dataArray.map((rowData, index) => (
        <ExpenseTableRow
          key={index}
          rowData={rowData}
          index={index}
          isTotal={isTotal}
          selectedFilter={selectedFilter}
          dataArray={dataArray}
        />
      ))}
    </tbody>
  );
}
