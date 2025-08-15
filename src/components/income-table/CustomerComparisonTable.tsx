import { TableContainer } from "../shared-table/TableContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CustomerComparisonData {
  metric: string;
  firstTime: string;
  returning: string;
}

interface CustomerComparisonTableProps {
  data: CustomerComparisonData[];
}

const B2CIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex items-center justify-center w-8 h-6 bg-pink-500 text-white text-xs font-bold rounded-md mr-2 cursor-help">
          RTL
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Retail Sales/B2C</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

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
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold flex items-center">
          <B2CIcon />
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
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors border-l-4 border-l-pink-500">
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