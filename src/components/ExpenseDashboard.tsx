
import { useState } from "react";
import { ExpenseCard } from "./ExpenseCard";
import { IncomeCard } from "./IncomeCard";
import { InsightsSection } from "./InsightsSection";
import { InventoryCard } from "./InventoryCard";
import { CustomerServiceCard } from "./CustomerServiceCard";
import { SearchFilters } from "./SearchFilters";
import { NavigationTabs } from "./NavigationTabs";

const totalExpenseData = {
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

const internalOrdersData = [
  totalExpenseData,
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
        invoiced: "$1,278,757.87",
        productExpense: "$1,278,757.87",
        freightToStore: "—",
        numInvoices: "—",
        numOrderingAccounts: "—",
        numItemsOrdered: "172,314",
        avgOrderValue: "$202.45",
        avgFreightToStore: "—",
        avgItemsPerOrder: "—",
        label: "Merchandise: Transfer ownership"
      },
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

const consumerMerchandiseData = {
  grossIncome: "$1,234,567.89",
  freightToCustomerExpense: "$98,765.43",
  salesTax: "$123,456.78",
  discounts: "$45,678.90",
  netIncome: "$967,666.78",
  numOrders: "12,345",
  avgOrderValue: "$100.12",
  numOrderingAccounts: "8,765",
  numItemsOrdered: "45,678",
  avgOrderValueAlt: "$110.23",
  avgFreightToCustomerExpense: "$8.00",
  avgNumItemsOrder: "3.7"
};

const inventorySnapshotData = {
  allInventory: { count: "145,678", value: "$2,456,789.00" },
  replenishment: { count: "89,432", value: "$1,578,456.00" },
  promotional: { count: "23,145", value: "$456,789.00" },
  merchandiseB2B: { count: "18,901", value: "$278,934.00" },
  merchandiseB2C: { count: "14,200", value: "$142,610.00" }
};

const internalOrdersItems = [
  { item: "Staff 1", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 2", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 3", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 4", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 5", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 6", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 7", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 8", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 9", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Staff 10", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" }
];

const consumerOrdersItems = [
  { item: "Merch 1", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 2", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 3", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 4", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 5", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 6", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 7", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 8", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 9", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" },
  { item: "Merch 10", count: "xxx,xxx,xxx", value: "$xxx,xxx,xxx", daysOnHand: "xxx" }
];

const supportCaseDataB2B = {
  ytdCreatedTickets: "2,076",
  ytdSolvedTickets: "2,075",
  ytdUnsolvedTickets: "1",
  resolutionPercentage: "99.95%",
  satisfactionScore: "80.88%"
};

const topTicketReasonsB2B = [
  { reason: "Voicemail", createdTickets: "569", percentageOfTotal: "27%" },
  { reason: "Wrong support channel", createdTickets: "277", percentageOfTotal: "13%" },
  { reason: "Spam", createdTickets: "212", percentageOfTotal: "10%" },
  { reason: "B2B customer wrong support chann...", createdTickets: "166", percentageOfTotal: "8%" },
  { reason: "Customer order tracking request", createdTickets: "107", percentageOfTotal: "5%" },
  { reason: "Shopify", createdTickets: "71", percentageOfTotal: "3%" },
  { reason: "Charges", createdTickets: "36", percentageOfTotal: "2%" },
  { reason: "Customer cancellation request", createdTickets: "35", percentageOfTotal: "2%" },
  { reason: "B2b customer incorrect item sent reship...", createdTickets: "35", percentageOfTotal: "2%" },
  { reason: "B2b customer return request", createdTickets: "33", percentageOfTotal: "2%" }
];

const supportCaseDataB2C = {
  ytdCreatedTickets: "1,543",
  ytdSolvedTickets: "1,542",
  ytdUnsolvedTickets: "1",
  resolutionPercentage: "99.93%",
  satisfactionScore: "85.42%"
};

const topTicketReasonsB2C = [
  { reason: "Order status inquiry", createdTickets: "423", percentageOfTotal: "27%" },
  { reason: "Product quality issues", createdTickets: "201", percentageOfTotal: "13%" },
  { reason: "Shipping delays", createdTickets: "154", percentageOfTotal: "10%" },
  { reason: "Return request", createdTickets: "123", percentageOfTotal: "8%" },
  { reason: "Payment issues", createdTickets: "77", percentageOfTotal: "5%" },
  { reason: "Size exchange", createdTickets: "46", percentageOfTotal: "3%" },
  { reason: "Refund request", createdTickets: "31", percentageOfTotal: "2%" },
  { reason: "Website technical issues", createdTickets: "31", percentageOfTotal: "2%" },
  { reason: "Product information", createdTickets: "31", percentageOfTotal: "2%" },
  { reason: "Promotional code issues", createdTickets: "26", percentageOfTotal: "2%" }
];

export function ExpenseDashboard() {
  const [activeTab, setActiveTab] = useState("expenses");
  const [selectedFilter, setSelectedFilter] = useState("");

  const renderTabContent = () => {
    switch (activeTab) {
      case "expenses":
        return (
          <>
            {/* Search and Filters */}
            <div className="px-1">
              <SearchFilters onFilterChange={setSelectedFilter} activeTab={activeTab} />
            </div>

            {/* Expense Cards */}
            <div className="space-y-8 px-1">
              <ExpenseCard
                title="All Internal Orders"
                data={internalOrdersData}
                variant="internal"
                selectedFilter={selectedFilter}
              />
            </div>
          </>
        );
      case "income":
        return (
          <>
            {/* Search and Filters */}
            <div className="px-1">
              <SearchFilters onFilterChange={setSelectedFilter} activeTab={activeTab} />
            </div>

            {/* Income Cards */}
            <div className="space-y-8 px-1">
              <IncomeCard
                title="Consumer Merchandise (if a B2C site exists)"
                data={consumerMerchandiseData}
                variant="consumer"
                selectedFilter={selectedFilter}
                showTooltip={true}
              />
              
              {/* Insights Section */}
              <InsightsSection />
            </div>
          </>
        );
      case "inventory":
        return (
          <>
            {/* Search and Filters */}
            <div className="px-1">
              <SearchFilters onFilterChange={setSelectedFilter} activeTab={activeTab} />
            </div>

            {/* Inventory Content */}
            <div className="space-y-8 px-1">
              <InventoryCard
                snapshotData={inventorySnapshotData}
                internalOrdersItems={internalOrdersItems}
                consumerOrdersItems={consumerOrdersItems}
              />
            </div>
          </>
        );
      case "customer-service":
        return (
          <>
            {/* Search and Filters */}
            <div className="px-1">
              <SearchFilters onFilterChange={setSelectedFilter} activeTab={activeTab} />
            </div>

            {/* Customer Service Content */}
            <div className="space-y-8 px-1">
              <CustomerServiceCard
                supportCaseDataB2B={supportCaseDataB2B}
                topTicketReasonsB2B={topTicketReasonsB2B}
                supportCaseDataB2C={supportCaseDataB2C}
                topTicketReasonsB2C={topTicketReasonsB2C}
              />
            </div>
          </>
        );
      case "sustainability":
        return (
          <>
            {/* Search and Filters */}
            <div className="px-1">
              <SearchFilters onFilterChange={setSelectedFilter} activeTab={activeTab} />
            </div>

            {/* Sustainability Content */}
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-muted-foreground">Sustainability reports coming soon</h2>
              </div>
            </div>
          </>
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
