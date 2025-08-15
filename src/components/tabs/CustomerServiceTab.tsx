
import { CustomerServiceCard } from "../CustomerServiceCard";
import { SearchFilters } from "../SearchFilters";
import { supportCaseDataB2B, topTicketReasonsB2B, supportCaseDataB2C, topTicketReasonsB2C } from "@/data/customerServiceData";

interface CustomerServiceTabProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function CustomerServiceTab({ selectedFilter, onFilterChange }: CustomerServiceTabProps) {
  return (
    <>
      <div className="px-1">
        <SearchFilters onFilterChange={onFilterChange} activeTab="customer-service" />
      </div>

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
}
