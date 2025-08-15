import { TableContainer } from "../shared-table/TableContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomerComparisonData {
  metric: string;
  firstTime: string;
  returning: string;
}

interface CustomerComparisonTableProps {
  data: CustomerComparisonData[];
}

const customerComparisonData: CustomerComparisonData[] = [
  { metric: "Total Customers", firstTime: "2,450", returning: "6,780" },
  { metric: "Average Order Value", firstTime: "$125.50", returning: "$98.75" },
  { metric: "Total Revenue", firstTime: "$307,475", returning: "$669,615" },
  { metric: "Conversion Rate", firstTime: "3.2%", returning: "8.7%" },
  { metric: "Items per Order", firstTime: "4.2", returning: "3.1" }
];

export function CustomerComparisonTable() {
  return (
    <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
      <CardHeader className="pb-6 border-b border-slate-100">
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold">
          First Time Customer vs. Returning Customer Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-3 px-4 font-medium text-sm text-slate-600 tracking-wide">Metric</th>
                <th className="text-right py-3 px-4 font-medium text-sm text-slate-600 tracking-wide">First Time Customers</th>
                <th className="text-right py-3 px-4 font-medium text-sm text-slate-600 tracking-wide">Returning Customers</th>
              </tr>
            </thead>
            <tbody>
              {customerComparisonData.map((row, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-slate-900">{row.metric}</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800 text-right">{row.firstTime}</td>
                  <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800 text-right">{row.returning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}