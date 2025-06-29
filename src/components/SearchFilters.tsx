
import { FilterHeader } from "./search-filters/FilterHeader";
import { SearchMethodSection } from "./search-filters/SearchMethodSection";
import { DateRangeSection } from "./search-filters/DateRangeSection";

interface SearchFiltersProps {
  onFilterChange?: (filter: string) => void;
  activeTab?: string;
}

export function SearchFilters({ onFilterChange, activeTab }: SearchFiltersProps) {
  const showSearchMethods = activeTab === "expenses";

  return (
    <div className="p-2 bg-card rounded-lg border border-border shadow-sm">
      <div className="grid grid-cols-12 gap-4 items-start">
        <FilterHeader title="Choose your filter" />
        {showSearchMethods && (
          <SearchMethodSection 
            onFilterChange={onFilterChange}
            showSearchMethods={showSearchMethods}
          />
        )}
        <div className={showSearchMethods ? "col-span-4" : "col-start-9 col-span-4"}>
          <DateRangeSection 
            activeTab={activeTab} 
            colSpan={4}
          />
        </div>
      </div>
    </div>
  );
}
