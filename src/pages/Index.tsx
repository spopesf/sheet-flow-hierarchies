
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ExpenseDashboard } from "@/components/ExpenseDashboard";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-8 space-y-6 bg-muted/30">
          <ExpenseDashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
