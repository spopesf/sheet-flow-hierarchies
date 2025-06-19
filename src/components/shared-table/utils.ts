
export const getCategoryIcon = (label: string) => {
  const iconMap: Record<string, { text: string; bgColor: string; textColor: string }> = {
    // Uniform Group - Blue tones
    "Uniforms: Replenishment": { text: "UR", bgColor: "bg-blue-600", textColor: "text-white" },
    "Uniforms: Non-replenishment": { text: "UN", bgColor: "bg-blue-400", textColor: "text-white" },
    
    // Merchandise Group - Purple tones
    "Asset Transfer": { text: "AT", bgColor: "bg-purple-600", textColor: "text-white" },
    "Merchandise Freight Only": { text: "MF", bgColor: "bg-purple-400", textColor: "text-white" },
    "Merchandise (Wholesale)": { text: "MR", bgColor: "bg-purple-500", textColor: "text-white" },
    "Merchandise (Retail)": { text: "MR", bgColor: "bg-purple-500", textColor: "text-white" }
  };
  return iconMap[label] || { text: "??", bgColor: "bg-gray-500", textColor: "text-white" };
};

export const getCategoryBorderColor = (label: string) => {
  const colorMap: Record<string, string> = {
    // Uniform Group - Blue borders
    "Uniforms: Replenishment": "border-l-blue-600",
    "Uniforms: Non-replenishment": "border-l-blue-400",
    
    // Merchandise Group - Purple borders
    "Asset Transfer": "border-l-purple-600", 
    "Merchandise Freight Only": "border-l-purple-400",
    "Merchandise (Wholesale)": "border-l-purple-500",
    "Merchandise (Retail)": "border-l-purple-500",
    
    // Special rows
    "All Inventory": "border-l-slate-600"
  };
  return colorMap[label] || "border-l-gray-500";
};

export const getTooltipContent = (label: string) => {
  const definitions: Record<string, string> = {
    "Uniforms: Replenishment": "Regular uniform inventory restocking orders to maintain optimal stock levels across all store locations.",
    "Uniforms: Non-replenishment": "Special uniform orders and promotional items distributed to stores for specific campaigns and new employee onboarding.",
    "Merchandise Freight Only": "Core product inventory including retail merchandise and goods for direct customer sales.",
    "Asset Transfer": "Merchandise inventory transferred between different ownership entities or departments.",
    "Merchandise (Wholesale)": "Merchandise (non-uniform) on any platform",
    "Merchandise (Retail)": "Merchandise (non-uniform) on any platform"
  };
  return definitions[label] || `Information about ${label}`;
};
