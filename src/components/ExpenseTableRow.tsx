
import { cn } from "@/lib/utils";
import { SectionHeaderRow } from "./expense-table/SectionHeaderRow";
import { RowLabel } from "./expense-table/RowLabel";
import { DataCell } from "./expense-table/DataCell";
import { 
  getCategoryBorderColor, 
  shouldShowNoData, 
  getRowTypeFlags 
} from "./expense-table/utils";

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

interface ExpenseTableRowProps {
  rowData: ExpenseData;
  index: number;
  isSubItem?: boolean;
  isTotal?: boolean;
  selectedFilter?: string;
  dataArray: ExpenseData[];
}

export function ExpenseTableRow({ 
  rowData, 
  index, 
  isSubItem = false, 
  isTotal = false, 
  selectedFilter, 
  dataArray 
}: ExpenseTableRowProps) {
  // Handle section headers
  if (rowData.type === "sectionHeader" && rowData.label) {
    return <SectionHeaderRow label={rowData.label} />;
  }

  const borderColor = rowData.label ? getCategoryBorderColor(rowData.label) : "";
  const showNoData = shouldShowNoData(rowData.label, selectedFilter);
  const { isTotalExpensesRow, isSalesCreditRow, isSubtotalRow } = getRowTypeFlags(rowData.label);
  
  // Special styling logic
  const shouldShowIcon = !isTotalExpensesRow && !isSubtotalRow && !isSalesCreditRow;
  const shouldShowBorder = !isTotalExpensesRow && !isSubtotalRow && !isSalesCreditRow;
  
  return (
    <tr 
      key={`${index}-${isSubItem ? 'sub' : 'main'}`}
      className={cn(
        "border-b border-slate-100 hover:bg-slate-50/50 transition-colors",
        isTotal && "bg-white font-semibold",
        index === 0 && Array.isArray(dataArray) && !isSubItem && "font-medium",
        (index > 0 && Array.isArray(dataArray) && !isSubItem) || isSubItem && "bg-slate-50/30",
        shouldShowBorder && rowData.label && borderColor && `border-l-4 ${borderColor}`,
        showNoData && "opacity-50 bg-slate-100/50",
        isTotalExpensesRow && "bg-slate-100 border-l-4 border-l-slate-600",
        isSalesCreditRow && "bg-white border-l-4 border-l-slate-600",
        isSubtotalRow && "bg-slate-100 border-l-4 border-l-slate-600 border-t border-t-slate-300"
      )}
    >
      <td className={cn(
        "py-2 px-2 text-xs font-mono tabular-nums text-slate-800 text-right align-bottom",
        isTotalExpensesRow && "font-bold text-slate-800",
        isSalesCreditRow && "text-slate-800",
        isSubtotalRow && "font-bold text-slate-800"
      )}>
        {rowData.label && (
          <RowLabel 
            label={rowData.label}
            showNoData={showNoData}
            shouldShowIcon={shouldShowIcon}
            isSubtotalRow={isSubtotalRow}
            isTotalExpensesRow={isTotalExpensesRow}
            isSalesCreditRow={isSalesCreditRow}
          />
        )}
        {showNoData ? "—" : rowData.invoiced}
      </td>
      
      <DataCell 
        value={rowData.productExpense} 
        showNoData={showNoData}
        isTotalExpensesRow={isTotalExpensesRow}
        isSalesCreditRow={isSalesCreditRow}
        isSubtotalRow={isSubtotalRow}
      />
      <DataCell 
        value={rowData.freightToStore} 
        showNoData={showNoData}
        isTotalExpensesRow={isTotalExpensesRow}
        isSalesCreditRow={isSalesCreditRow}
        isSubtotalRow={isSubtotalRow}
      />
      <DataCell 
        value={rowData.numInvoices} 
        showNoData={showNoData}
        isTotalExpensesRow={isTotalExpensesRow}
        isSalesCreditRow={isSalesCreditRow}
        isSubtotalRow={isSubtotalRow}
      />
      <DataCell 
        value={rowData.numOrderingAccounts} 
        showNoData={showNoData}
        isTotalExpensesRow={isTotalExpensesRow}
        isSalesCreditRow={isSalesCreditRow}
        isSubtotalRow={isSubtotalRow}
      />
      <DataCell 
        value={rowData.numItemsOrdered} 
        showNoData={showNoData}
        isTotalExpensesRow={isTotalExpensesRow}
        isSalesCreditRow={isSalesCreditRow}
        isSubtotalRow={isSubtotalRow}
      />
      <DataCell 
        value={rowData.avgOrderValue} 
        showNoData={showNoData}
        isTotalExpensesRow={isTotalExpensesRow}
        isSalesCreditRow={isSalesCreditRow}
        isSubtotalRow={isSubtotalRow}
      />
      <DataCell 
        value={rowData.avgFreightToStore} 
        showNoData={showNoData}
        isTotalExpensesRow={isTotalExpensesRow}
        isSalesCreditRow={isSalesCreditRow}
        isSubtotalRow={isSubtotalRow}
        isCurrency={true}
      />
      <DataCell 
        value={rowData.avgItemsPerOrder} 
        showNoData={showNoData}
        isTotalExpensesRow={isTotalExpensesRow}
        isSalesCreditRow={isSalesCreditRow}
        isSubtotalRow={isSubtotalRow}
      />
    </tr>
  );
}
