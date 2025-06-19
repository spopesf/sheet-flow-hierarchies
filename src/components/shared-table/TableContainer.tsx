
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TableContainerProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "highlighted";
  className?: string;
  useTable?: boolean;
}

export function TableContainer({ 
  title, 
  children, 
  variant = "default",
  className,
  useTable = false
}: TableContainerProps) {
  const isHighlighted = variant === "highlighted";
  
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-200",
      isHighlighted 
        ? "border-slate-300 bg-white shadow-lg border-2" 
        : "border-slate-200 bg-white hover:shadow-md",
      className
    )}>
      <CardHeader className={cn(
        "pb-6 border-b border-slate-100",
        isHighlighted && "bg-slate-50/50"
      )}>
        <CardTitle className={cn(
          "tracking-tight",
          isHighlighted 
            ? "text-slate-900 font-bold text-xl" 
            : "text-lg text-slate-900 font-semibold"
        )}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          {useTable ? (
            <table className="w-full">
              {children}
            </table>
          ) : (
            children
          )}
        </div>
      </CardContent>
    </Card>
  );
}
