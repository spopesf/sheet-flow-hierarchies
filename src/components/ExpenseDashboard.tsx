
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ExpenseCard } from "./ExpenseCard";
import { DateRangePicker } from "./DateRangePicker";
import { SearchFilters } from "./SearchFilters";

const internalOrdersData = {
  invoiced: "$5,051,172.45",
  productExpense: "$4,447,750.29",
  freightToStore: "$603,422.16",
  numInvoices: "24870",
  numOrderingAccounts: "24520",
  numItemsOrdered: "543061",
  avgOrderValue: "$206.02",
  avgFreightToStore: "21.36",
  avgItemsPerOrder: "21.75"
};

const consumerOrdersData = {
  invoiced: "$21,196.30",
  productExpense: "$0.00",
  freightToStore: "$21,196.30",
  numInvoices: "897",
  numOrderingAccounts: "0",
  numItemsOrdered: "1350",
  avgOrderValue: "$0.00",
  avgFreightToStore: "0.00",
  avgItemsPerOrder: "0.00"
};

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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-muted-foreground" />
          <h1 className="text-2xl font-bold text-foreground">Expenses</h1>
        </div>
        <DateRangePicker />
      </div>

      {/* Search and Filters */}
      <SearchFilters />

      {/* Expense Cards */}
      <div className="space-y-6">
        <ExpenseCard
          title="All Internal Orders"
          data={internalOrdersData}
          variant="internal"
        />
        
        <ExpenseCard
          title="All Consumer Orders"
          data={consumerOrdersData}
          variant="consumer"
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
