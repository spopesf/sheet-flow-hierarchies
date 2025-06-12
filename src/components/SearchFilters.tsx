
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, CalendarDays, ChevronRight } from "lucide-react";

export function SearchFilters() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const handleInputChange = (value: string) => {
    setSearchInput(value);
    if (value) {
      setSelectedDropdown(""); // Clear dropdown when typing in input
    }
  };

  const handleDropdownChange = (value: string) => {
    setSelectedDropdown(value);
    if (value !== "all") {
      setSearchInput(""); // Clear input when selecting dropdown option
    }
  };

  return (
    <div className="space-y-4 p-6 bg-card rounded-lg border border-border shadow-sm">
      {/* Date Range - Top Row */}
      <div className="flex items-center justify-center gap-3 text-sm">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />
        <Button variant="ghost" size="sm" className="font-medium text-foreground hover:bg-accent">
          01/01/2025
        </Button>
        <ChevronRight className="h-3 w-3 text-muted-foreground" />
        <Button variant="ghost" size="sm" className="font-medium text-foreground hover:bg-accent">
          06/11/2025
        </Button>
      </div>
      
      {/* Search Input and Dropdown - Bottom Row */}
      <div className="flex items-center gap-6">
        {/* Search Input */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <Input 
            placeholder="Store# or Employee#" 
            value={searchInput}
            onChange={(e) => handleInputChange(e.target.value)}
            disabled={selectedDropdown && selectedDropdown !== "all"}
            className="border-0 shadow-none focus-visible:ring-0 font-medium placeholder:text-muted-foreground disabled:opacity-50"
          />
        </div>
        
        {/* Dropdown */}
        <Select value={selectedDropdown} onValueChange={handleDropdownChange} disabled={!!searchInput}>
          <SelectTrigger className="w-[200px] font-medium disabled:opacity-50">
            <SelectValue placeholder="All Orders" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="internal">Internal Orders</SelectItem>
            <SelectItem value="consumer">Consumer Orders</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
