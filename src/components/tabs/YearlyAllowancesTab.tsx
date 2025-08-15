import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from "recharts";
import { FilterHeader } from "../search-filters/FilterHeader";

interface YearlyAllowancesTabProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

// Mock data for the bar chart
const allowanceData = [
  { name: "Full Allowance", value: 450, fill: "hsl(var(--chart-blue-1))" },
  { name: "Some Remaining", value: 320, fill: "hsl(var(--chart-blue-2))" },
  { name: "No Remaining", value: 180, fill: "hsl(var(--chart-purple))" }
];

// Mock data for employee list
const generateEmployeeData = () => {
  const employees = [];
  let empId = 1001;
  
  // 450 employees with full allowance ($100.00)
  for (let i = 0; i < 450; i++) {
    employees.push({
      id: `EMP${empId++}`,
      allowanceRemaining: 100.00
    });
  }
  
  // 320 employees with some remaining allowance ($0.01 - $99.99)
  const partialAllowances = [];
  for (let i = 0; i < 320; i++) {
    partialAllowances.push(Math.floor(Math.random() * 9999 + 1) / 100); // $0.01 to $99.99
  }
  partialAllowances.sort((a, b) => b - a); // Sort high to low
  
  for (let i = 0; i < 320; i++) {
    employees.push({
      id: `EMP${empId++}`,
      allowanceRemaining: partialAllowances[i]
    });
  }
  
  // 180 employees with no remaining allowance ($0.00)
  for (let i = 0; i < 180; i++) {
    employees.push({
      id: `EMP${empId++}`,
      allowanceRemaining: 0.00
    });
  }
  
  return employees;
};

const employeeData = generateEmployeeData();

export function YearlyAllowancesTab({ selectedFilter, onFilterChange }: YearlyAllowancesTabProps) {
  const [showAllEmployees, setShowAllEmployees] = useState(true);
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [searchedEmployee, setSearchedEmployee] = useState<{id: string, allowanceRemaining: number} | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleEmployeeSearch = () => {
    const employee = employeeData.find(emp => emp.id === employeeNumber.toUpperCase());
    setSearchedEmployee(employee || null);
    setHasSearched(true);
  };

  return (
    <>
      <div className="px-1 space-y-6">
        {/* Filter Section */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-4 items-center">
                <FilterHeader title="Choose your filter" />
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
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3"></div>
                  <div className="col-span-5 flex items-center space-x-2">
                    <Input
                      placeholder="Enter Employee ID (e.g., EMP1001)"
                      value={employeeNumber}
                      onChange={(e) => setEmployeeNumber(e.target.value)}
                      className="max-w-xs"
                    />
                    <Button onClick={handleEmployeeSearch}>Search</Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Content based on toggle */}
        {showAllEmployees ? (
          <div className="space-y-6">
            {/* Allowance Statistics Table */}
            <Card>
              <CardHeader>
                <CardTitle>Employee Allowance Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Total $ value of Allowance given</td>
                        <td className="py-3 px-4 text-right font-semibold text-slate-900">
                          ${(employeeData.length * 200).toLocaleString()}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Total $ value of allowance spent</td>
                        <td className="py-3 px-4 text-right font-semibold text-slate-900">
                          ${(employeeData.length * 200 - employeeData.reduce((sum, emp) => sum + emp.allowanceRemaining, 0) - (employeeData.length * 100)).toLocaleString()}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Number of employees given allowance</td>
                        <td className="py-3 px-4 text-right font-semibold text-slate-900">
                          {employeeData.length.toLocaleString()}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Number of employees who have spent some or all of their allowance</td>
                        <td className="py-3 px-4 text-right font-semibold text-slate-900">
                          {employeeData.filter(emp => emp.allowanceRemaining < 100).length.toLocaleString()}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Number of employees who have spent all their allowance</td>
                        <td className="py-3 px-4 text-right font-semibold text-slate-900">
                          {employeeData.filter(emp => emp.allowanceRemaining === 0).length.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-900">Number of employees who have spent over their allowance</td>
                        <td className="py-3 px-4 text-right font-semibold text-slate-900">
                          0
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
            ) : hasSearched && !searchedEmployee && employeeNumber && (
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