
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Search, CalendarDays, ChevronRight } from "lucide-react";

interface SearchFiltersProps {
  onFilterChange?: (filter: string) => void;
  activeTab?: string;
}

export function SearchFilters({ onFilterChange, activeTab }: SearchFiltersProps) {
  const [searchMethod, setSearchMethod] = useState("search");
  const [searchInput, setSearchInput] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const handleSearchMethodChange = (value: string) => {
    setSearchMethod(value);
    // Clear the other input when switching methods
    if (value === "search") {
      setSelectedDropdown("");
      onFilterChange?.("");
    } else {
      setSearchInput("");
    }
  };

  const handleDropdownChange = (value: string) => {
    setSelectedDropdown(value);
    onFilterChange?.(value);
  };

  // Only show search methods for expenses tab
  const showSearchMethods = activeTab === "expenses";

  return (
    <div className="p-3 bg-card rounded-lg border border-border shadow-sm">
      <div className="grid grid-cols-3 gap-8 items-start">
        {/* Section Title - left column */}
        <div>
          <h2 className="text-lg font-semibold text-foreground">Choose your filter</h2>
        </div>
        
        {/* Search Method Selection - middle column, only show for expenses */}
        <div className="space-y-1">
          {showSearchMethods && (
            <>
              <label className="text-sm font-medium text-muted-foreground">Search Method</label>
              <RadioGroup value={searchMethod} onValueChange={handleSearchMethodChange} className="space-y-1">
                {/* Search Input Option */}
                <div className="flex items-center space-x-2 p-2 rounded-md border border-border bg-background/50">
                  <RadioGroupItem value="search" id="search" className="mt-0" />
                  <Label htmlFor="search" className="flex items-center gap-2 flex-1 cursor-pointer">
                    <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <Input 
                      placeholder="Store# or Employee#" 
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      disabled={searchMethod !== "search"}
                      className="border-0 shadow-none focus-visible:ring-0 font-medium placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed bg-transparent h-7"
                    />
                  </Label>
                </div>
                
                {/* Dropdown Option */}
                <div className="flex items-center space-x-2 p-2 rounded-md border border-border bg-background/50">
                  <RadioGroupItem value="filter" id="filter" className="mt-0" />
                  <Label htmlFor="filter" className="flex items-center flex-1 cursor-pointer">
                    <Select value={selectedDropdown} onValueChange={handleDropdownChange} disabled={searchMethod !== "filter"}>
                      <SelectTrigger className="w-full font-medium disabled:opacity-50 disabled:cursor-not-allowed border-0 shadow-none bg-transparent h-7">
                        <SelectValue placeholder="All User Groups" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-user-groups">All User Groups</SelectItem>
                        <SelectItem value="rsc-corporate">RSC Corporate</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="restaurants">Restaurants</SelectItem>
                        <SelectItem value="ctm-and-r">CTM and R</SelectItem>
                        <SelectItem value="facilities-nro-r-ops-leaders">Facilities, NRO, R Ops Leaders</SelectItem>
                      </SelectContent>
                    </Select>
                  </Label>
                </div>
              </RadioGroup>
            </>
          )}
        </div>
        
        {/* Date Range - right column (always in same position) */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-muted-foreground">Date Range</label>
          <div className="flex items-center justify-start gap-2 text-sm">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <Button variant="ghost" size="sm" className="font-medium text-foreground hover:bg-accent p-1 h-auto">
              01/01/2025
            </Button>
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
            <Button variant="ghost" size="sm" className="font-medium text-foreground hover:bg-accent p-1 h-auto">
              06/11/2025
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
