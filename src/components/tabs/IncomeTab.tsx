
import { IncomeCard } from "../IncomeCard";
import { InsightsSection } from "../InsightsSection";
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
        <IncomeCard
          title="Consumer Merchandise (if a B2C site exists)"
          data={consumerMerchandiseData}
          variant="consumer"
          selectedFilter={selectedFilter}
          showTooltip={true}
        />
        
        <InsightsSection />
      </div>
    </>
  );
}
