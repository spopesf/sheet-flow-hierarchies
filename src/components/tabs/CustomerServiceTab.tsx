
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
