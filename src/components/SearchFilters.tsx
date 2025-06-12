
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Search, CalendarDays, ChevronRight } from "lucide-react";

interface SearchFiltersProps {
  onFilterChange?: (filter: string) => void;
  activeTab?: string;
}

export function SearchFilters({ onFilterChange, activeTab }: SearchFiltersProps) {
  const [searchMethod, setSearchMethod] = useState("filter");
  const [searchInput, setSearchInput] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("all-user-groups");
  const [dateRangeMethod, setDateRangeMethod] = useState("predefined");
  const [selectedDateRange, setSelectedDateRange] = useState("year-to-date");

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

  const handleDateRangeMethodChange = (value: string) => {
    setDateRangeMethod(value);
    if (value === "manual") {
      setSelectedDateRange("");
    }
  };

  const handleDateRangeDropdownChange = (value: string) => {
    setSelectedDateRange(value);
  };

  // Only show search methods for expenses tab
  const showSearchMethods = activeTab === "expenses";

  return (
    <div className="p-3 bg-card rounded-lg border border-border shadow-sm">
      <div className="grid grid-cols-3 gap-16 items-start">
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
                {/* Dropdown Option - now first */}
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

                {/* Search Input Option - now second */}
                <div className="flex items-center space-x-2 p-2 rounded-md border border-border bg-background/50">
                  <RadioGroupItem value="search" id="search" className="mt-0" />
                  <Label htmlFor="search" className="flex items-center flex-1 cursor-pointer">
                    <div className="relative flex-1">
                      <Input 
                        placeholder="Store# or Employee#" 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        disabled={searchMethod !== "search"}
                        className="border-0 shadow-none focus-visible:ring-0 font-medium placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed bg-transparent h-7 pr-8"
                      />
                      <Search className="h-4 w-4 text-muted-foreground absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </>
          )}
        </div>
        
        {/* Date Range - right column */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-muted-foreground">Date Range</label>
          <RadioGroup value={dateRangeMethod} onValueChange={handleDateRangeMethodChange} className="space-y-1">
            {/* Predefined Date Range Option - now first */}
            <div className="flex items-center space-x-2 p-2 rounded-md border border-border bg-background/50">
              <RadioGroupItem value="predefined" id="predefined-date" className="mt-0" />
              <Label htmlFor="predefined-date" className="flex items-center flex-1 cursor-pointer">
                <Select value={selectedDateRange} onValueChange={handleDateRangeDropdownChange} disabled={dateRangeMethod !== "predefined"}>
                  <SelectTrigger className="w-full font-medium disabled:opacity-50 disabled:cursor-not-allowed border-0 shadow-none bg-transparent h-7">
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="this-quarter">This Quarter</SelectItem>
                    <SelectItem value="this-year">This Year</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="last-quarter">Last Quarter</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="month-to-date">Month to Date</SelectItem>
                    <SelectItem value="quarter-to-date">Quarter to Date</SelectItem>
                    <SelectItem value="year-to-date">Year to Date</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                    <SelectItem value="last-14-days">Last 14 Days</SelectItem>
                    <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                    <SelectItem value="last-60-days">Last 60 Days</SelectItem>
                    <SelectItem value="last-90-days">Last 90 Days</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="last-12-months">Last 12 Months</SelectItem>
                  </SelectContent>
                </Select>
              </Label>
            </div>

            {/* Manual Date Range Option - now second */}
            <div className="flex items-center space-x-2 p-2 rounded-md border border-border bg-background/50">
              <RadioGroupItem value="manual" id="manual-date" className="mt-0" />
              <Label htmlFor="manual-date" className="flex items-center flex-1 cursor-pointer">
                <div className="relative flex items-center gap-2 text-sm flex-1">
                  <CalendarDays className="h-4 w-4 text-muted-foreground absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="font-medium text-foreground hover:bg-accent p-1 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={dateRangeMethod !== "manual"}
                    >
                      01/01/2025
                    </Button>
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="font-medium text-foreground hover:bg-accent p-1 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={dateRangeMethod !== "manual"}
                    >
                      06/11/2025
                    </Button>
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
