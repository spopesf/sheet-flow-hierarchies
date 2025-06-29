
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Search, CalendarDays, ChevronRight, AlertCircle } from "lucide-react";

interface SearchFiltersProps {
  onFilterChange?: (filter: string) => void;
  activeTab?: string;
}

export function SearchFilters({ onFilterChange, activeTab }: SearchFiltersProps) {
  const [searchMethod, setSearchMethod] = useState("filter");
  const [searchInput, setSearchInput] = useState("");
  const [employeeInput, setEmployeeInput] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("all-user-groups");
  const [dateRangeMethod, setDateRangeMethod] = useState("predefined");
  const [selectedDateRange, setSelectedDateRange] = useState("year-to-date");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedQuarter, setSelectedQuarter] = useState("Q4");
  const [storeError, setStoreError] = useState("");
  const [employeeError, setEmployeeError] = useState("");

  const validateStoreNumber = (value: string) => {
    // Simple validation - you can modify this logic based on your actual validation needs
    if (value && value.length > 0) {
      // For demo purposes, let's say store numbers should be numeric and exist in a certain range
      const storeNum = parseInt(value);
      if (isNaN(storeNum) || storeNum < 1 || storeNum > 9999) {
        setStoreError("This store # does not exist");
      } else {
        setStoreError("");
      }
    } else {
      setStoreError("");
    }
  };

  const validateEmployeeNumber = (value: string) => {
    // Simple validation - you can modify this logic based on your actual validation needs
    if (value && value.length > 0) {
      // For demo purposes, let's say employee numbers should be numeric and exist in a certain range
      const empNum = parseInt(value);
      if (isNaN(empNum) || empNum < 1 || empNum > 99999) {
        setEmployeeError("This employee # does not exist");
      } else {
        setEmployeeError("");
      }
    } else {
      setEmployeeError("");
    }
  };

  const handleSearchMethodChange = (value: string) => {
    setSearchMethod(value);
    // Clear the other inputs and errors when switching methods
    if (value === "store") {
      setSelectedDropdown("");
      setEmployeeInput("");
      setEmployeeError("");
      onFilterChange?.("");
    } else if (value === "employee") {
      setSelectedDropdown("");
      setSearchInput("");
      setStoreError("");
      onFilterChange?.("");
    } else {
      setSearchInput("");
      setEmployeeInput("");
      setStoreError("");
      setEmployeeError("");
    }
  };

  const handleStoreInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    validateStoreNumber(value);
  };

  const handleEmployeeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmployeeInput(value);
    validateEmployeeNumber(value);
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
  // Check if we're on inventory tab
  const isInventoryTab = activeTab === "inventory";
  // Check if we're on sustainability tab
  const isSustainabilityTab = activeTab === "sustainability";

  return (
    <div className="p-2 bg-card rounded-lg border border-border shadow-sm">
      <div className="grid grid-cols-12 gap-4 items-start">
        {/* Section Title - 3 columns */}
        <div className="col-span-3">
          <h2 className="text-base font-semibold text-foreground">Choose your filter</h2>
        </div>
        
        {/* Search Method Selection - using same 4+8 column structure as Store/Employee inputs */}
        <div className="col-span-5 space-y-0.5">
          {showSearchMethods && (
            <>
              {/* Search Method label aligned in 4+8 structure */}
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4"></div>
                <div className="col-span-8">
                  <label className="text-xs font-medium text-muted-foreground">Search Method</label>
                </div>
              </div>
              <RadioGroup value={searchMethod} onValueChange={handleSearchMethodChange} className="space-y-0.5">
                {/* All User Groups Dropdown Option - using same grid as Store/Employee */}
                <div className="grid grid-cols-12 gap-2 items-center">
                  {/* Empty space - 4 columns to match error message space */}
                  <div className="col-span-4"></div>
                  {/* Input field - 8 columns to match Store/Employee inputs */}
                  <div className="col-span-8 flex items-center space-x-2 p-1 rounded border border-border bg-background/50">
                    <RadioGroupItem value="filter" id="filter" className="mt-0 h-3 w-3" />
                    <Label htmlFor="filter" className="flex items-center flex-1 cursor-pointer">
                      <Select value={selectedDropdown} onValueChange={handleDropdownChange} disabled={searchMethod !== "filter"}>
                        <SelectTrigger className="w-full font-medium disabled:opacity-50 disabled:cursor-not-allowed border-0 shadow-none bg-transparent h-6 text-xs">
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
                </div>

                {/* Store # Input Option with error to the left */}
                <div className="grid grid-cols-12 gap-2 items-center">
                  {/* Error message - 4 columns */}
                  <div className="col-span-4">
                    {storeError && searchMethod === "store" && (
                      <div className="flex items-center text-red-600 justify-end">
                        <AlertCircle className="h-2.5 w-2.5 mr-0.5" />
                        <span className="text-[10px] leading-none whitespace-nowrap">{storeError}</span>
                      </div>
                    )}
                  </div>
                  {/* Input field - 8 columns */}
                  <div className="col-span-8 flex items-center space-x-2 p-1 rounded border border-border bg-background/50">
                    <RadioGroupItem value="store" id="store" className="mt-0 h-3 w-3" />
                    <Label htmlFor="store" className="flex items-center flex-1 cursor-pointer">
                      <div className="relative flex-1">
                        <Input 
                          placeholder="Store #" 
                          value={searchInput}
                          onChange={handleStoreInputChange}
                          disabled={searchMethod !== "store"}
                          className={`border-0 shadow-none focus-visible:ring-0 font-medium placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed bg-transparent h-6 text-xs pr-6 ${storeError ? 'text-red-600' : ''}`}
                        />
                        <Search className="h-3 w-3 text-muted-foreground absolute right-1.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </Label>
                  </div>
                </div>

                {/* Employee # Input Option with error to the left */}
                <div className="grid grid-cols-12 gap-2 items-center">
                  {/* Error message - 4 columns */}
                  <div className="col-span-4">
                    {employeeError && searchMethod === "employee" && (
                      <div className="flex items-center text-red-600 justify-end">
                        <AlertCircle className="h-2.5 w-2.5 mr-0.5" />
                        <span className="text-[10px] leading-none whitespace-nowrap">{employeeError}</span>
                      </div>
                    )}
                  </div>
                  {/* Input field - 8 columns */}
                  <div className="col-span-8 flex items-center space-x-2 p-1 rounded border border-border bg-background/50">
                    <RadioGroupItem value="employee" id="employee" className="mt-0 h-3 w-3" />
                    <Label htmlFor="employee" className="flex items-center flex-1 cursor-pointer">
                      <div className="relative flex-1">
                        <Input 
                          placeholder="Employee #" 
                          value={employeeInput}
                          onChange={handleEmployeeInputChange}
                          disabled={searchMethod !== "employee"}
                          className={`border-0 shadow-none focus-visible:ring-0 font-medium placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed bg-transparent h-6 text-xs pr-6 ${employeeError ? 'text-red-600' : ''}`}
                        />
                        <Search className="h-3 w-3 text-muted-foreground absolute right-1.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </>
          )}
        </div>
        
        {/* Date Range - 4 columns */}
        <div className="col-span-4 space-y-0.5">
          <label className="text-xs font-medium text-muted-foreground">
            {isInventoryTab ? "On Date" : "Date Range"}
          </label>
          
          {isSustainabilityTab ? (
            // Year and Quarter dropdowns for sustainability tab
            <div className="flex gap-2">
              <div className="p-1 rounded border border-border bg-background/50 flex-1">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full font-medium border-0 shadow-none bg-transparent h-6 text-xs">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-1 rounded border border-border bg-background/50 flex-1">
                <Select value={selectedQuarter} onValueChange={setSelectedQuarter}>
                  <SelectTrigger className="w-full font-medium border-0 shadow-none bg-transparent h-6 text-xs">
                    <SelectValue placeholder="Quarter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Q4">Q4</SelectItem>
                    <SelectItem value="Q3">Q3</SelectItem>
                    <SelectItem value="Q2">Q2</SelectItem>
                    <SelectItem value="Q1">Q1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ) : isInventoryTab ? (
            // Single date picker for inventory tab
            <div className="p-1 rounded border border-border bg-background/50">
              <div className="relative flex items-center gap-1.5 text-xs">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="font-medium text-foreground hover:bg-accent p-0.5 h-6 text-xs"
                >
                  06/11/2025
                </Button>
                <CalendarDays className="h-3 w-3 text-muted-foreground absolute right-1.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          ) : (
            // Original radio group for other tabs
            <RadioGroup value={dateRangeMethod} onValueChange={handleDateRangeMethodChange} className="space-y-0.5">
              {/* Predefined Date Range Option - now first */}
              <div className="flex items-center space-x-2 p-1 rounded border border-border bg-background/50">
                <RadioGroupItem value="predefined" id="predefined-date" className="mt-0 h-3 w-3" />
                <Label htmlFor="predefined-date" className="flex items-center flex-1 cursor-pointer">
                  <Select value={selectedDateRange} onValueChange={handleDateRangeDropdownChange} disabled={dateRangeMethod !== "predefined"}>
                    <SelectTrigger className="w-full font-medium disabled:opacity-50 disabled:cursor-not-allowed border-0 shadow-none bg-transparent h-6 text-xs">
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
              <div className="flex items-center space-x-2 p-1 rounded border border-border bg-background/50">
                <RadioGroupItem value="manual" id="manual-date" className="mt-0 h-3 w-3" />
                <Label htmlFor="manual-date" className="flex items-center flex-1 cursor-pointer">
                  <div className="relative flex items-center gap-1.5 text-xs flex-1">
                    <CalendarDays className="h-3 w-3 text-muted-foreground absolute right-1.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    <div className="flex items-center gap-1.5">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="font-medium text-foreground hover:bg-accent p-0.5 h-6 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                        disabled={dateRangeMethod !== "manual"}
                      >
                        01/01/2025
                      </Button>
                      <ChevronRight className="h-2.5 w-2.5 text-muted-foreground" />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="font-medium text-foreground hover:bg-accent p-0.5 h-6 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                        disabled={dateRangeMethod !== "manual"}
                      >
                        06/11/2025
                      </Button>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          )}
        </div>
      </div>
    </div>
  );
}
