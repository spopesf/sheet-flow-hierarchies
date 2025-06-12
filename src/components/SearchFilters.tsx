
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, CalendarDays, ChevronRight } from "lucide-react";

export function SearchFilters() {
  return (
    <div className="flex items-center gap-6 p-6 bg-card rounded-lg border border-border shadow-sm">
      {/* Search Input */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <Input 
          placeholder="Store# or Employee#" 
          className="border-0 shadow-none focus-visible:ring-0 font-medium placeholder:text-muted-foreground"
        />
      </div>
      
      {/* Dropdown */}
      <Select>
        <SelectTrigger className="w-[200px] font-medium">
          <SelectValue placeholder="All Orders" defaultValue="all" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Orders</SelectItem>
          <SelectItem value="internal">Internal Orders</SelectItem>
          <SelectItem value="consumer">Consumer Orders</SelectItem>
        </SelectContent>
      </Select>
      
      {/* Date Range */}
      <div className="flex items-center gap-3 text-sm">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />
        <Button variant="ghost" size="sm" className="font-medium text-foreground hover:bg-accent">
          01/01/2025
        </Button>
        <ChevronRight className="h-3 w-3 text-muted-foreground" />
        <Button variant="ghost" size="sm" className="font-medium text-foreground hover:bg-accent">
          06/11/2025
        </Button>
      </div>
    </div>
  );
}
