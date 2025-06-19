
import { TableContainer } from "../shared-table/TableContainer";
import { TableHeader } from "../shared-table/TableHeader";
import { InventorySnapshotRow } from "./InventorySnapshotRow";

interface InventorySnapshotData {
  allInventory: { count: string; value: string };
  replenishment: { count: string; value: string };
  promotional: { count: string; value: string };
  merchandiseWholesale: { count: string; value: string };
  merchandiseRetail: { count: string; value: string };
}

interface InventorySnapshotTableProps {
  data: InventorySnapshotData;
}

const columns = [
  { label: "", className: "text-right", minWidth: "200px" },
  { label: "Count", minWidth: "100px" },
  { label: "Value", minWidth: "100px" }
];

export function InventorySnapshotTable({ data }: InventorySnapshotTableProps) {
  return (
    <TableContainer title="Inventory Snapshot" useTable={true}>
      <TableHeader columns={columns} />
      <tbody>
        <InventorySnapshotRow label="All Inventory" data={data.allInventory} isTotal />
        <InventorySnapshotRow label="Uniforms: Replenishment" data={data.replenishment} />
        <InventorySnapshotRow label="Uniforms: Non-replenishment" data={data.promotional} />
        <InventorySnapshotRow label="Merchandise (Wholesale)" data={data.merchandiseWholesale} />
        <InventorySnapshotRow label="Merchandise (Retail)" data={data.merchandiseRetail} />
      </tbody>
    </TableContainer>
  );
}
