
import { InventoryCard } from "../InventoryCard";
import { SearchFilters } from "../SearchFilters";
import { inventorySnapshotData, internalOrdersItems, consumerOrdersItems } from "@/data/inventoryData";

interface InventoryTabProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function InventoryTab({ selectedFilter, onFilterChange }: InventoryTabProps) {
  return (
    <>
      <div className="px-1">
        <SearchFilters onFilterChange={onFilterChange} activeTab="inventory" />
      </div>

      <div className="space-y-8 px-1">
        <InventoryCard
          snapshotData={inventorySnapshotData}
          internalOrdersItems={internalOrdersItems}
          consumerOrdersItems={consumerOrdersItems}
        />
      </div>
    </>
  );
}
