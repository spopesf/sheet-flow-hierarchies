import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface YearlyAllowancesTabProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

// Mock data for the bar chart
const allowanceData = [
  { name: "Full Allowance", value: 450, fill: "hsl(var(--primary))" },
  { name: "Some Remaining", value: 320, fill: "hsl(var(--secondary))" },
  { name: "No Remaining", value: 180, fill: "hsl(var(--destructive))" }
];

// Mock data for employee list
const generateEmployeeData = () => {
  const employees = [];
  for (let i = 1001; i <= 3000; i++) {
    employees.push({
      id: `EMP${i}`,
      allowanceRemaining: Math.floor(Math.random() * 5000)
    });
  }
  return employees;
};

const employeeData = generateEmployeeData();

export function YearlyAllowancesTab({ selectedFilter, onFilterChange }: YearlyAllowancesTabProps) {
  const [showAllEmployees, setShowAllEmployees] = useState(true);
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [searchedEmployee, setSearchedEmployee] = useState<{id: string, allowanceRemaining: number} | null>(null);

  const handleEmployeeSearch = () => {
    const employee = employeeData.find(emp => emp.id === employeeNumber.toUpperCase());
    setSearchedEmployee(employee || null);
  };

  return (
    <>
      <div className="px-1 space-y-6">
        {/* Filter Section */}
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3">
                <Label>Employee Filter</Label>
              </div>
              <div className="col-span-5 flex items-center space-x-3">
                <Label htmlFor="employee-toggle">Employee #</Label>
                <Switch
                  id="employee-toggle"
                  checked={showAllEmployees}
                  onCheckedChange={setShowAllEmployees}
                />
                <Label htmlFor="employee-toggle">All Employees</Label>
              </div>
              <div className="col-span-4">
                <div className="text-sm text-muted-foreground">
                  <strong>Date Range:</strong> Year to Date
                </div>
              </div>
            </div>

            {!showAllEmployees && (
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Enter Employee ID (e.g., EMP1001)"
                  value={employeeNumber}
                  onChange={(e) => setEmployeeNumber(e.target.value)}
                  className="max-w-xs"
                />
                <Button onClick={handleEmployeeSearch}>Search</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Content based on toggle */}
        {showAllEmployees ? (
          <div className="space-y-6">
            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Employee Allowance Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "Number of Employees",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={allowanceData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="value" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Employee List */}
            <Card>
              <CardHeader>
                <CardTitle>All Employees - Yearly Allowance Remaining</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    {employeeData.map((employee) => (
                      <div
                        key={employee.id}
                        className="flex justify-between items-center p-2 border rounded"
                      >
                        <span className="font-mono">{employee.id}</span>
                        <span className="text-muted-foreground">
                          ${employee.allowanceRemaining.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div>
            {searchedEmployee ? (
              <Card>
                <CardHeader>
                  <CardTitle>Employee Allowance Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Employee ID:</span>
                      <span className="font-mono">{searchedEmployee.id}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Yearly Allowance Remaining:</span>
                      <span className="text-lg font-bold text-primary">
                        ${searchedEmployee.allowanceRemaining.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : employeeNumber && (
              <Card>
                <CardContent className="py-8">
                  <div className="text-center text-muted-foreground">
                    Employee "{employeeNumber}" not found. Please check the Employee ID.
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </>
  );
}