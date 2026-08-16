import { Tabs, type TabsType } from "../config";
import { InfoTab } from "./InfoTab";

interface Props {
  tab: TabsType;
  isSmall: boolean;
}

export function TabDisplay({ tab, isSmall }: Props) {
  function getDisplay() {
    switch (true) {
      case (tab === Tabs.Info): return <InfoTab />
      case (tab === Tabs.Photos && isSmall): return <div>Photos</div>
      case (tab === Tabs.Socials): return <div>Socials</div>
      default: return <InfoTab />
    }
  }
  
  return <div className="h-full flex flex-col gap-1 box-transition *:bg-white *:rounded-3xl *:shadow-md *:p-2">{getDisplay()}</div>
}