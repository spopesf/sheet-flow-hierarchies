
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronRight } from "lucide-react";

export function DateRangePicker() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <CalendarDays className="h-4 w-4 text-muted-foreground" />
      <Button variant="ghost" size="sm" className="font-normal">
        01/01/2025
      </Button>
      <ChevronRight className="h-3 w-3 text-muted-foreground" />
      <Button variant="ghost" size="sm" className="font-normal">
        06/11/2025
      </Button>
    </div>
  );
}
