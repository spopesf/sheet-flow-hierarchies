
import { 
  BarChart3, 
  Home, 
  MapPin, 
  ShoppingCart, 
  Headphones, 
  LogOut 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "My Account",
    url: "#",
    icon: Home,
  },
  {
    title: "Addresses",
    url: "#",
    icon: MapPin,
  },
  {
    title: "Orders",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Customer Support",
    url: "#",
    icon: Headphones,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: BarChart3,
    isActive: true,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <SidebarGroup className="pt-32">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={item.isActive}
                    className={cn(
                      "font-medium tracking-tight",
                      item.isActive ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border">
        <Button variant="outline" className="w-full justify-start font-medium tracking-tight" size="sm">
          <LogOut className="h-4 w-4 mr-2" />
          LOG OUT
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
