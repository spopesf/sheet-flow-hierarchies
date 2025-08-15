
import { InventorySnapshotTable } from "./inventory-table/InventorySnapshotTable";
import { TopItemsTable } from "./inventory-table/TopItemsTable";

interface InventorySnapshotData {
  allInventory: { count: string; value: string };
  replenishment: { count: string; value: string };
  promotional: { count: string; value: string };
  merchandiseWholesale: { count: string; value: string };
  merchandiseRetail: { count: string; value: string };
}

interface InventoryItem {
  item: string;
  upc: string;
  count: string;
  value: string;
  daysOnHand: string;
}

interface InventoryCardProps {
  snapshotData: InventorySnapshotData;
  internalOrdersItems: InventoryItem[];
  consumerOrdersItems: InventoryItem[];
}

export function InventoryCard({ snapshotData, internalOrdersItems, consumerOrdersItems }: InventoryCardProps) {
  const internalOrderIcons = [
    { text: "UR", bgColor: "bg-blue-600", textColor: "text-white", tooltip: "Uniform replenishment items from internal orders" },
    { text: "UN", bgColor: "bg-blue-400", textColor: "text-white", tooltip: "Uniform non-replenishment items from internal orders" }
  ];

  const consumerOrderIcons = [
    { text: "MR", bgColor: "bg-purple-500", textColor: "text-white", tooltip: "Merchandise (non-uniform) on any platform" }
  ];

  return (
    <div className="space-y-8">
      <InventorySnapshotTable data={snapshotData} />
      
      <div className="grid grid-cols-2 gap-6">
        <TopItemsTable
          title="Top 10 UPCs"
          items={internalOrdersItems}
          icons={internalOrderIcons}
          itemBorderClass="internal"
        />
        
        <TopItemsTable
          title="Top 10 UPCs"
          items={consumerOrdersItems}
          icons={consumerOrderIcons}
          itemBorderClass="consumer"
        />
      </div>
    </div>
  );
}
