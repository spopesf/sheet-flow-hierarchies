
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Search, CalendarDays, ChevronRight } from "lucide-react";

export function SearchFilters() {
  const [searchMethod, setSearchMethod] = useState("search");
  const [searchInput, setSearchInput] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const handleSearchMethodChange = (value: string) => {
    setSearchMethod(value);
    // Clear the other input when switching methods
    if (value === "search") {
      setSelectedDropdown("");
    } else {
      setSearchInput("");
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
      
      {/* Search Method Selection */}
      <RadioGroup value={searchMethod} onValueChange={handleSearchMethodChange} className="space-y-4">
        {/* Search Input Option */}
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="search" id="search" />
          <Label htmlFor="search" className="flex items-center gap-3 flex-1 cursor-pointer">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <Input 
              placeholder="Store# or Employee#" 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              disabled={searchMethod !== "search"}
              className="border-0 shadow-none focus-visible:ring-0 font-medium placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </Label>
        </div>
        
        {/* Dropdown Option */}
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="filter" id="filter" />
          <Label htmlFor="filter" className="flex items-center flex-1 cursor-pointer">
            <Select value={selectedDropdown} onValueChange={setSelectedDropdown} disabled={searchMethod !== "filter"}>
              <SelectTrigger className="w-[200px] font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                <SelectValue placeholder="All Orders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="internal">Internal Orders</SelectItem>
                <SelectItem value="consumer">Consumer Orders</SelectItem>
              </SelectContent>
            </Select>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
