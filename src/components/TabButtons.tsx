// src/components/TabButtons.tsx
import React from "react";

interface TabButton {
  id: string;
  label: string;
}

interface TabButtonsProps {
  tabs: TabButton[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

const TabButtons: React.FC<TabButtonsProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  return (
    <div className="tab-buttons">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabClick(tab.id)}
          data-tab={tab.id}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
