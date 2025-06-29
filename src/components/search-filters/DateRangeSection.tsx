import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CalendarDays, ChevronRight } from "lucide-react";

interface DateRangeSectionProps {
  activeTab?: string;
  colSpan?: number;
}

export function DateRangeSection({ activeTab, colSpan = 4 }: DateRangeSectionProps) {
  const [dateRangeMethod, setDateRangeMethod] = useState("predefined");
  const [selectedDateRange, setSelectedDateRange] = useState("year-to-date");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedQuarter, setSelectedQuarter] = useState("Q4");

  const handleDateRangeMethodChange = (value: string) => {
    setDateRangeMethod(value);
    if (value === "manual") {
      setSelectedDateRange("");
    }
  };

  const handleDateRangeDropdownChange = (value: string) => {
    setSelectedDateRange(value);
  };

  const isInventoryTab = activeTab === "inventory";
  const isSustainabilityTab = activeTab === "sustainability";

  return (
    <div className={`col-span-${colSpan} space-y-0.5`}>
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
          {/* Predefined Date Range Option */}
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

          {/* Manual Date Range Option */}
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
  );
}
