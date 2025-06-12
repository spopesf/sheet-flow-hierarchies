
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TopItemData {
  item: string;
  numberSold: string;
  msrp: string;
}

interface CustomerTypeData {
  type: string;
  numOrders: string;
  percentOrders: string;
  sales: string;
  percentSales: string;
  avgOrderValue: string;
}

const topItemsData: TopItemData[] = [
  { item: "Merch 1", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 2", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 3", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 4", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 5", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 6", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 7", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 8", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 9", numberSold: "x,xxx", msrp: "$ xxx" },
  { item: "Merch 10", numberSold: "x,xxx", msrp: "$ xxx" }
];

const customerTypeData: CustomerTypeData[] = [
  {
    type: "First Timer Customer",
    numOrders: "x,xxx",
    percentOrders: "xx%",
    sales: "$ x,xxx",
    percentSales: "xx%",
    avgOrderValue: "$ xxx"
  },
  {
    type: "Repeat Customer",
    numOrders: "x,xxx",
    percentOrders: "xx%",
    sales: "$ x,xxx",
    percentSales: "xx%",
    avgOrderValue: "$ xxx"
  }
];

export function InsightsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Insights</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top 10 Items */}
          <Card className="border-slate-200 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Top 10 Items (consumer orders)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600">Item</th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600"># Sold</th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600">MSRP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topItemsData.map((item, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-4 text-sm text-slate-800">{item.item}</td>
                        <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800">{item.numberSold}</td>
                        <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800">{item.msrp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* First Time Customer vs. Repeat */}
          <Card className="border-slate-200 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-slate-900">
                First Time Customer vs. Repeat
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600">Item</th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600"># of Orders</th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600">% of Orders</th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600">Sales</th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600">% of Sales</th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-slate-600">Average Order Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerTypeData.map((customer, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-4 text-sm text-slate-800">{customer.type}</td>
                        <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800">{customer.numOrders}</td>
                        <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800">{customer.percentOrders}</td>
                        <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800">{customer.sales}</td>
                        <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800">{customer.percentSales}</td>
                        <td className="py-3 px-4 text-sm font-mono tabular-nums text-slate-800">{customer.avgOrderValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
