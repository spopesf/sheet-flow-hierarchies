
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
    <div className="p-4 bg-card rounded-lg border border-border shadow-sm">
      <div className="grid grid-cols-3 gap-6 items-start">
        {/* Section Title */}
        <div>
          <h2 className="text-lg font-semibold text-foreground">Choose your filters</h2>
        </div>
        
        {/* Date Range */}
        <div className="space-y-2">
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
        
        {/* Search Method Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Search Method</label>
          <RadioGroup value={searchMethod} onValueChange={handleSearchMethodChange} className="space-y-2">
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
                  className="border-0 shadow-none focus-visible:ring-0 font-medium placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed bg-transparent h-8"
                />
              </Label>
            </div>
            
            {/* Dropdown Option */}
            <div className="flex items-center space-x-2 p-2 rounded-md border border-border bg-background/50">
              <RadioGroupItem value="filter" id="filter" className="mt-0" />
              <Label htmlFor="filter" className="flex items-center flex-1 cursor-pointer">
                <Select value={selectedDropdown} onValueChange={setSelectedDropdown} disabled={searchMethod !== "filter"}>
                  <SelectTrigger className="w-full font-medium disabled:opacity-50 disabled:cursor-not-allowed border-0 shadow-none bg-transparent h-8">
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
        </div>
      </div>
    </div>
  );
}
