export const totalExpenseData = {
  invoiced: "$5,073,490.38",
  productExpense: "$4,447,750.29",
  freightToStore: "$625,740.09",
  numInvoices: "25,965",
  numOrderingAccounts: "24,520",
  numItemsOrdered: "544,764",
  avgOrderValue: "$206.02",
  avgFreightToStore: "21.36",
  avgItemsPerOrder: "21.75",
  label: "Total Expenses"
};

export const salesCreditData = {
  invoiced: "-$125,000.00",
  productExpense: "-$108,500.00",
  freightToStore: "—",
  numInvoices: "—",
  numOrderingAccounts: "—",
  numItemsOrdered: "—",
  avgOrderValue: "—",
  avgFreightToStore: "—",
  avgItemsPerOrder: "—",
  label: "Sales Credit"
};

export const uniformSubtotalData = {
  invoiced: "$5,051,172.45",
  productExpense: "$4,447,750.29",
  freightToStore: "$603,422.16",
  numInvoices: "24,870",
  numOrderingAccounts: "24,520",
  numItemsOrdered: "543,061",
  avgOrderValue: "$203.12",
  avgFreightToStore: "24.26",
  avgItemsPerOrder: "21.84",
  label: "Subtotal Uniforms"
};

export const merchandiseSubtotalData = {
  invoiced: "$1,462,843.08",
  productExpense: "$1,278,757.87",
  freightToStore: "$184,085.21",
  numInvoices: "850",
  numOrderingAccounts: "235",
  numItemsOrdered: "244,859",
  avgOrderValue: "$202.45",
  avgFreightToStore: "—",
  avgItemsPerOrder: "14.5",
  label: "Subtotal Merchandise"
};

export const internalOrdersData = [
  totalExpenseData,
  salesCreditData,
  {
    type: "sectionHeader",
    label: "Uniform Expenses"
  },
  {
    invoiced: "$2,125,486.30",
    productExpense: "$1,890,234.55",
    freightToStore: "$235,251.75",
    numInvoices: "10,420",
    numOrderingAccounts: "9,850",
    numItemsOrdered: "198,432",
    avgOrderValue: "$204.15",
    avgFreightToStore: "22.56",
    avgItemsPerOrder: "19.05",
    label: "Uniforms: Replenishment"
  },
  {
    invoiced: "$2,925,686.15",
    productExpense: "$2,557,515.74",
    freightToStore: "$368,170.41",
    numInvoices: "14,450",
    numOrderingAccounts: "14,670",
    numItemsOrdered: "344,629",
    avgOrderValue: "$202.45",
    avgFreightToStore: "25.48",
    avgItemsPerOrder: "23.85",
    label: "Uniforms: Non-replenishment"
  },
  uniformSubtotalData,
  {
    type: "sectionHeader",
    label: "Merchandise"
  },
  {
    invoiced: "$1,278,757.87",
    productExpense: "$1,278,757.87",
    freightToStore: "—",
    numInvoices: "—",
    numOrderingAccounts: "—",
    numItemsOrdered: "172,314",
    avgOrderValue: "$202.45",
    avgFreightToStore: "—",
    avgItemsPerOrder: "—",
    label: "Asset Transfer"
  },
  {
    invoiced: "$184,085.21",
    productExpense: "—",
    freightToStore: "$184,085.21",
    numInvoices: "850",
    numOrderingAccounts: "235",
    numItemsOrdered: "72,545",
    avgOrderValue: "—",
    avgFreightToStore: "—",
    avgItemsPerOrder: "14.5",
    label: "Merchandise Freight Only"
  },
  merchandiseSubtotalData
];
