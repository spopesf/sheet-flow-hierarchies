
import { NavigationTabs } from "./NavigationTabs";
import { useDashboard } from "@/hooks/useDashboard";
import { ExpensesTab } from "./tabs/ExpensesTab";
import { IncomeTab } from "./tabs/IncomeTab";
import { InventoryTab } from "./tabs/InventoryTab";
import { CustomerServiceTab } from "./tabs/CustomerServiceTab";
import { SustainabilityTab } from "./tabs/SustainabilityTab";

export function ExpenseDashboard() {
  const { activeTab, setActiveTab, selectedFilter, setSelectedFilter } = useDashboard();

  const renderTabContent = () => {
    switch (activeTab) {
      case "expenses":
        return <ExpensesTab selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />;
      case "income":
        return <IncomeTab selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />;
      case "inventory":
        return <InventoryTab selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />;
      case "customer-service":
        return <CustomerServiceTab selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />;
      case "sustainability":
        return <SustainabilityTab selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}
            </h1>
          </div>
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
}
