
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

export const getTooltipContent = (label: string) => {
  const definitions: Record<string, string> = {
    "Uniforms: Replenishment": "Regular uniform inventory restocking orders to maintain optimal stock levels across all store locations.",
    "Uniforms: Non-replenishment": "Special uniform orders and promotional items distributed to stores for specific campaigns and new employee onboarding.",
    "Merchandise Freight Only": "Core product inventory including retail merchandise and goods for direct customer sales.",
    "Asset Transfer": "Merchandise inventory transferred between different ownership entities or departments."
  };
  return definitions[label] || `Information about ${label}`;
};

export const getCategoryIcon = (label: string) => {
  const iconMap: Record<string, { text: string; bgColor: string; textColor: string }> = {
    // Uniform Group - Blue tones (professional, uniform-like)
    "Uniforms: Replenishment": { text: "UR", bgColor: "bg-blue-600", textColor: "text-white" },
    "Uniforms: Non-replenishment": { text: "UN", bgColor: "bg-blue-400", textColor: "text-white" },
    
    // Merchandise Group - Purple tones (retail, commerce)
    "Asset Transfer": { text: "AT", bgColor: "bg-purple-600", textColor: "text-white" },
    "Merchandise Freight Only": { text: "MF", bgColor: "bg-purple-400", textColor: "text-white" }
  };
  return iconMap[label] || { text: "??", bgColor: "bg-gray-500", textColor: "text-white" };
};

export const getCategoryBorderColor = (label: string) => {
  const colorMap: Record<string, string> = {
    // Uniform Group - Blue borders
    "Uniforms: Replenishment": "border-l-blue-600",
    "Uniforms: Non-replenishment": "border-l-blue-400",
    
    // Merchandise Group - Purple borders
    "Asset Transfer": "border-l-purple-600", 
    "Merchandise Freight Only": "border-l-purple-400"
  };
  return colorMap[label] || "border-l-gray-500";
};

export const shouldShowNoData = (label: string | undefined, selectedFilter: string | undefined) => {
  return selectedFilter === "rsc-corporate" && 
         label && 
         (label.includes("Uniforms: Replenishment") || 
          label.includes("Uniforms: Non-replenishment") ||
          label.includes("Asset Transfer"));
};

export const getRowTypeFlags = (label: string | undefined) => {
  return {
    isTotalExpensesRow: label === "Total Expenses",
    isSalesCreditRow: label === "Sales Credit",
    isSubtotalRow: label?.startsWith("Subtotal") || false
  };
};
