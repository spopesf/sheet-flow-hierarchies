
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function SearchFilters() {
  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
      <div className="flex items-center gap-2 flex-1">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Store# or Employee#" 
          className="border-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Customer group" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Groups</SelectItem>
          <SelectItem value="internal">Internal</SelectItem>
          <SelectItem value="consumer">Consumer</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
