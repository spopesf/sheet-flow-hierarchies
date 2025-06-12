import { ExpenseCard } from "./ExpenseCard";
import { SearchFilters } from "./SearchFilters";
import { NavigationTabs } from "./NavigationTabs";

const internalOrdersData = [
  {
    invoiced: "$5,051,172.45",
    productExpense: "$4,447,750.29",
    freightToStore: "$603,422.16",
    numInvoices: "24870",
    numOrderingAccounts: "24520",
    numItemsOrdered: "543061",
    avgOrderValue: "$206.02",
    avgFreightToStore: "21.36",
    avgItemsPerOrder: "21.75"
  },
  {
    invoiced: "$2,125,486.30",
    productExpense: "$1,890,234.55",
    freightToStore: "$235,251.75",
    numInvoices: "10420",
    numOrderingAccounts: "9850",
    numItemsOrdered: "198432",
    avgOrderValue: "$204.15",
    avgFreightToStore: "22.56",
    avgItemsPerOrder: "19.05",
    label: "Promotional Items"
  },
  {
    invoiced: "$2,925,686.15",
    productExpense: "$2,557,515.74",
    freightToStore: "$368,170.41",
    numInvoices: "14450",
    numOrderingAccounts: "14670",
    numItemsOrdered: "344629",
    avgOrderValue: "$202.45",
    avgFreightToStore: "25.48",
    avgItemsPerOrder: "23.85",
    label: "Replenishment",
    subItems: [
      {
        invoiced: "$1,462,843.08",
        productExpense: "$1,278,757.87",
        freightToStore: "$184,085.21",
        numInvoices: "7225",
        numOrderingAccounts: "7335",
        numItemsOrdered: "172314",
        avgOrderValue: "$202.45",
        avgFreightToStore: "25.48",
        avgItemsPerOrder: "23.85",
        label: "Merchandise"
      }
    ]
  }
];

const totalExpenseData = {
  invoiced: "$5,073,490.38",
  productExpense: "$4,447,750.29",
  freightToStore: "$625,740.09",
  numInvoices: "25965",
  numOrderingAccounts: "24520",
  numItemsOrdered: "544764",
  avgOrderValue: "$206.02",
  avgFreightToStore: "21.36",
  avgItemsPerOrder: "21.75"
};

export function ExpenseDashboard() {
  return (
    <div className="space-y-8">
      {/* Navigation Tabs */}
      <NavigationTabs />
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Expenses</h1>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-1">
        <SearchFilters />
      </div>

      {/* Expense Cards */}
      <div className="space-y-8 px-1">
        <ExpenseCard
          title="All Internal Orders"
          data={internalOrdersData}
          variant="internal"
        />
        
        <ExpenseCard
          title="Total Expense"
          data={totalExpenseData}
          variant="total"
        />
      </div>
    </div>
  );
}
