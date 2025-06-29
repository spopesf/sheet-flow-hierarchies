
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Search, AlertCircle } from "lucide-react";
import { validateStoreNumber, validateEmployeeNumber } from "./validation";

interface SearchMethodSectionProps {
  onFilterChange?: (filter: string) => void;
  showSearchMethods: boolean;
}

export function SearchMethodSection({ onFilterChange, showSearchMethods }: SearchMethodSectionProps) {
  const [searchMethod, setSearchMethod] = useState("filter");
  const [searchInput, setSearchInput] = useState("");
  const [employeeInput, setEmployeeInput] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("all-user-groups");
  const [storeError, setStoreError] = useState("");
  const [employeeError, setEmployeeError] = useState("");

  const handleSearchMethodChange = (value: string) => {
    setSearchMethod(value);
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
    setStoreError(validateStoreNumber(value));
  };

  const handleEmployeeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmployeeInput(value);
    setEmployeeError(validateEmployeeNumber(value));
  };

  const handleDropdownChange = (value: string) => {
    setSelectedDropdown(value);
    onFilterChange?.(value);
  };

  if (!showSearchMethods) {
    return null;
  }

  return (
    <div className="col-span-5 space-y-0.5">
      {/* Search Method label aligned in 4+8 structure */}
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4"></div>
        <div className="col-span-8">
          <label className="text-xs font-medium text-muted-foreground">Search Method</label>
        </div>
      </div>
      <RadioGroup value={searchMethod} onValueChange={handleSearchMethodChange} className="space-y-0.5">
        {/* All User Groups Dropdown Option */}
        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-4"></div>
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

        {/* Store # Input Option */}
        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-4">
            {storeError && searchMethod === "store" && (
              <div className="flex items-center text-red-600 justify-end">
                <AlertCircle className="h-2.5 w-2.5 mr-0.5" />
                <span className="text-[10px] leading-none whitespace-nowrap">{storeError}</span>
              </div>
            )}
          </div>
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

        {/* Employee # Input Option */}
        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-4">
            {employeeError && searchMethod === "employee" && (
              <div className="flex items-center text-red-600 justify-end">
                <AlertCircle className="h-2.5 w-2.5 mr-0.5" />
                <span className="text-[10px] leading-none whitespace-nowrap">{employeeError}</span>
              </div>
            )}
          </div>
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
    </div>
  );
}
