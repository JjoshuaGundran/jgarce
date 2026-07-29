import { Tabs } from "../config";
import type { Tab, TabsType } from "../config";

import { useEffect, useState } from "react"
import { PhotoSection } from "./PhotoSection"

interface Props {
  isLarge: boolean,
}

const TABS: Tab[] = [
  {
    name: Tabs.Info,
    isLarge: false,
  },
  {
    name: Tabs.Photos,
    isLarge: true,
  },
  {
    name: Tabs.Socials,
    isLarge: false,
  },
]

export function MainSection({ isLarge }: Props) {
  const [currentTab, setCurrentTab] = useState<Tab>(TABS[0]);

  function getBtnCss(name: string): string {
    const isActive = name === currentTab.name;
    let css = "";

    return css;
  }
  
  return (
    <div className="h-full w-full flex flex-col gap-1 lg:w-120 *:bg-white *:rounded-3xl *:shadow-md">
      <div className="p-2 flex justify-between items-center">
        <div>Logo</div>
        <div className="flex gap-2 *:bg-gray-100 *:rounded-3xl *:p-2">
          {TABS.map((tab, idx) => {
            if (tab.isLarge) return isLarge && <button key={idx} className={getBtnCss(tab.name)}>{tab.name}</button>;
            else return <button key={idx} className={getBtnCss(tab.name)}>{tab.name}</button>;
          })}
        </div>
      </div>
      <div className="flex-1 p-4">Two</div>
      <div className="p-2">Three</div>
      <div className="flex-2 p-2 overflow-y-auto *:bg-gray-100 *:rounded-3xl *:p-2">
        <div>Three</div>
      </div>
      <div className="p-2">Four</div>
    </div>
  )
}