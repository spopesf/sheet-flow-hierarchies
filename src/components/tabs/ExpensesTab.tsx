
import { ExpenseCard } from "../ExpenseCard";
import { SearchFilters } from "../SearchFilters";
import { internalOrdersData } from "@/data/expenseData";

interface ExpensesTabProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ExpensesTab({ selectedFilter, onFilterChange }: ExpensesTabProps) {
  return (
    <>
      <div className="px-1">
        <SearchFilters onFilterChange={onFilterChange} activeTab="expenses" />
      </div>

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
}
