
// Re-export shared utilities and add expense-specific ones
export { getCategoryIcon, getCategoryBorderColor, getTooltipContent } from "../shared-table/utils";

export const shouldShowNoData = (label: string | undefined, selectedFilter: string | undefined) => {
  return selectedFilter === "rsc-corporate" && 
         label && 
         (label.includes("Uniforms: Replenishment") || 
          label.includes("Uniforms: Non-replenishment") ||
          label.includes("Asset Transfer") ||
          label.includes("Subtotal Uniforms"));
};

export const getRowTypeFlags = (label: string | undefined) => {
  return {
    isTotalExpensesRow: label === "Total Expenses",
    isSalesCreditRow: label === "Sales Credit",
    isSubtotalRow: label?.startsWith("Subtotal") || false
  };
};
