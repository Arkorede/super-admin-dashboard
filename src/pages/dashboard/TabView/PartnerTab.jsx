import React, { useState } from "react";
import "./TabView.css";

export default function TabView({ title, tabs = {} }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="Tabview">
      {title && <h4 className="title text-lg font-bold">{title}</h4>}
      <div className="body">
        {Object.keys(tabs).length === 0 ? (
          <div>No Tabs</div>
        ) : (
          <div>
            <div className="tabs flex gap-[3.875rem] font-medium text-sm text-[#8A8B9F] leading-[19px]">
              {tabs.map((tab, index) => (
                <label
                  key={index}
                  className={index === activeTabIndex ? "active-tab" : "tab"}
                  onClick={() => activateTab(index)}
                >
                  {tab.name}
                </label>
              ))}
            </div>
            <div className="content mt-6">{tabs[activeTabIndex].content}</div>
          </div>
        )}
      </div>
    </div>
  );
}
