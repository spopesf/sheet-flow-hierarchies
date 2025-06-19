
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface CategoryIconProps {
  text: string;
  bgColor: string;
  textColor: string;
  tooltip: string;
  showNoData?: boolean;
}

export function CategoryIcon({ 
  text, 
  bgColor, 
  textColor, 
  tooltip, 
  showNoData = false 
}: CategoryIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn(
            "w-9 h-5 rounded-full flex items-center justify-center text-xs font-bold min-w-[36px] cursor-help hover:opacity-80 transition-opacity",
            bgColor,
            textColor,
            showNoData && "opacity-60"
          )}>
            {text}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
