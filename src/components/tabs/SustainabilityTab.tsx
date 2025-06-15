
import { SearchFilters } from "../SearchFilters";

interface SustainabilityTabProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function SustainabilityTab({ selectedFilter, onFilterChange }: SustainabilityTabProps) {
  return (
    <>
      <div className="px-1">
        <SearchFilters onFilterChange={onFilterChange} activeTab="sustainability" />
      </div>

      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-muted-foreground">Sustainability reports coming soon</h2>
        </div>
      </div>
    </>
  );
}
