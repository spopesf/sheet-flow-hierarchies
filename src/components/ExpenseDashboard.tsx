
import { useState } from "react";
import { ExpenseCard } from "./ExpenseCard";
import { SearchFilters } from "./SearchFilters";
import { NavigationTabs } from "./NavigationTabs";

const internalOrdersData = [
  {
    invoiced: "$5,051,172.45",
    productExpense: "$4,447,750.29",
    freightToStore: "$603,422.16",
    numInvoices: "24,870",
    numOrderingAccounts: "24,520",
    numItemsOrdered: "543,061",
    avgOrderValue: "$206.02",
    avgFreightToStore: "21.36",
    avgItemsPerOrder: "21.75"
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
    label: "Uniforms: Non-replenishment",
    subItems: [
      {
        invoiced: "$1,462,843.08",
        productExpense: "$1,278,757.87",
        freightToStore: "$184,085.21",
        numInvoices: "7,225",
        numOrderingAccounts: "7,335",
        numItemsOrdered: "172,314",
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
  numInvoices: "25,965",
  numOrderingAccounts: "24,520",
  numItemsOrdered: "544,764",
  avgOrderValue: "$206.02",
  avgFreightToStore: "21.36",
  avgItemsPerOrder: "21.75"
};

export function ExpenseDashboard() {
  const [activeTab, setActiveTab] = useState("expenses");

  const renderTabContent = () => {
    switch (activeTab) {
      case "expenses":
        return (
          <>
            {/* Search and Filters */}
            <div className="px-1">
              <SearchFilters />
            </div>

            {/* Expense Cards */}
            <div className="space-y-8 px-1">
              <ExpenseCard
                title="Total Expense"
                data={totalExpenseData}
                variant="total"
              />
              
              <ExpenseCard
                title="All Internal Orders"
                data={internalOrdersData}
                variant="internal"
              />
            </div>
          </>
        );
      case "income":
        return (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-muted-foreground">Income reports coming soon</h2>
            </div>
          </div>
        );
      case "inventory":
        return (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-muted-foreground">Inventory reports coming soon</h2>
            </div>
          </div>
        );
      case "customer-service":
        return (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-muted-foreground">Customer Service reports coming soon</h2>
            </div>
          </div>
        );
      case "sustainability":
        return (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-muted-foreground">Sustainability reports coming soon</h2>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}
            </h1>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
