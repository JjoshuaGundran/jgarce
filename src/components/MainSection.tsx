import { Tabs } from "../config";
import type { Tab } from "../config";

import { useEffect, useState } from "react"
import { TabDisplay } from "./TabDisplay";

interface Props {
  isSmall: boolean,
}

const TABS: Tab[] = [
  {
    name: Tabs.Info,
    isSmallScreenOnly: false,
  },
  {
    name: Tabs.Photos,
    isSmallScreenOnly: true,
  },
  {
    name: Tabs.Socials,
    isSmallScreenOnly: false,
  },
]

export function MainSection({ isSmall }: Props) {
  const [currentTab, setCurrentTab] = useState<Tab>(TABS[0]);

  function getBtnCss(name: string): string {
    const baseCss = "tab-bg-transition";
    const isActive = name === currentTab.name ? " active" : "";
    return baseCss + isActive;
  }

  useEffect(() => {
    if (currentTab.name === Tabs.Photos && !isSmall) {
      setCurrentTab(TABS[0]);
    };
  }, [isSmall])
  
  return (
    <div className="h-full w-full flex flex-col gap-1 lg:w-120">
      <div className="p-2 flex justify-between items-center bg-white rounded-3xl shadow-md">
        <div>Logo</div>
        <div className="flex gap-2 *:rounded-3xl *:p-2 *:cursor-pointer">
          {TABS.map((tab, idx) => {
            if (tab.isSmallScreenOnly) return isSmall && <button key={idx} className={getBtnCss(tab.name)} onClick={() => setCurrentTab(tab)}>{tab.name}</button>;
            else return <button key={idx} className={getBtnCss(tab.name)} onClick={() => setCurrentTab(tab)}>{tab.name}</button>;
          })}
        </div>
      </div>
      <TabDisplay tab={currentTab.name} isSmall={isSmall} />
    </div>
  )
}