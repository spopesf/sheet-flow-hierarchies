
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function NavigationTabs() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="px-8">
        <Tabs defaultValue="expenses" className="w-full">
          <TabsList className="h-12 bg-transparent p-0 border-0">
            <TabsTrigger 
              value="expenses" 
              className="h-12 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium"
            >
              Expenses
            </TabsTrigger>
            <TabsTrigger 
              value="income"
              className="h-12 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium"
            >
              Income
            </TabsTrigger>
            <TabsTrigger 
              value="inventory"
              className="h-12 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium"
            >
              Inventory
            </TabsTrigger>
            <TabsTrigger 
              value="customer-service"
              className="h-12 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium"
            >
              Customer Service
            </TabsTrigger>
            <TabsTrigger 
              value="sustainability"
              className="h-12 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium"
            >
              Sustainability
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
