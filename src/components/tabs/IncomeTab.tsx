
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
            title="Top 10 Items"
            items={[]}
            variant="wsl"
          />
          <TopItemsTable
            title="Top 10 Items"
            items={[]}
            variant="rtl"
          />
        </div>

        {/* Key Section */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Key</h3>
          <div className="flex gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center justify-center w-8 h-6 bg-orange-500 text-white text-xs font-bold rounded-md">
                WSL
              </div>
              <span className="text-slate-700">Wholesale Sales/B2B</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center justify-center w-8 h-6 bg-pink-500 text-white text-xs font-bold rounded-md">
                RTL
              </div>
              <span className="text-slate-700">Retail Sales/B2C</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
