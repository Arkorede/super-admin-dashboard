import React, { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import "./TabView.css";

export default function PartnerTab({ title, tabs = {} }) {
  const { pathname } = useLocation();

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useLayoutEffect(() => {
    if (pathname === "/partners/*") {
      setActiveTabIndex(1);
      console.log("Partners!");
    }
  }, [pathname]);

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
