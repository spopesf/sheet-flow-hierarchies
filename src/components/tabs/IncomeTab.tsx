
import { IncomeCard } from "../IncomeCard";
import { CustomerComparisonTable } from "../income-table/CustomerComparisonTable";
import { TopItemsTable } from "../income-table/TopItemsTable";
import { SearchFilters } from "../SearchFilters";
import { consumerMerchandiseData } from "@/data/incomeData";

interface IncomeTabProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function IncomeTab({ selectedFilter, onFilterChange }: IncomeTabProps) {
  return (
    <>
      <div className="px-1">
        <SearchFilters onFilterChange={onFilterChange} activeTab="income" />
      </div>

      <div className="space-y-8 px-1">
        {/* Merchandise Summary */}
        <IncomeCard
          title="Consumer Merchandise (if a B2C site exists)"
          data={consumerMerchandiseData}
          variant="consumer"
          selectedFilter={selectedFilter}
          showTooltip={true}
        />
        
        {/* Customer Comparison Table - Full Width */}
        <CustomerComparisonTable />

        {/* Side by Side Top Items Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopItemsTable
            title="Top 25 Items"
            items={[]}
            variant="wsl"
          />
          <TopItemsTable
            title="Top 25 Items"
            items={[]}
            variant="rtl"
          />
        </div>

      </div>
    </>
  );
}
