
import { useState } from "react";

export function useDashboard() {
  const [activeTab, setActiveTab] = useState("expenses");
  const [selectedFilter, setSelectedFilter] = useState("");

  return {
    activeTab,
    setActiveTab,
    selectedFilter,
    setSelectedFilter
  };
}
