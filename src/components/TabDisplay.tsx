import { Tabs, Animation, type TabsType, type AnimationState } from "../config";
import { useState, useEffect } from "react";
import { InfoTab } from "./InfoTab";
import { SocialsTab } from "./SocialsTab";
import { PhotoTab } from "./PhotoTab";

interface Props {
  tab: TabsType;
  isSmall: boolean;
  switchToFirstTab: () => void;
}

export function TabDisplay({ tab, isSmall, switchToFirstTab }: Props) {
  const [currentTab, setCurrentTab] = useState<TabsType>(tab);
  const [animation, setAnimation] = useState<AnimationState>(Animation.Idle);
  
  useEffect(() => {
    if (!isSmall && currentTab === Tabs.Photos && animation === Animation.Idle) {
      setAnimation(Animation.Exiting);
    }
    
    else if (tab !== currentTab && animation === Animation.Idle) {
      setAnimation(Animation.Exiting);
    }
  }, [isSmall, tab, currentTab, animation])
  
  function onExitComplete() {
    if (!isSmall && currentTab === Tabs.Photos) {
      switchToFirstTab();
      setCurrentTab(Tabs.Info);
    } else {
      setCurrentTab(tab);
    }

    requestAnimationFrame(() => {
      setAnimation(Animation.Entering);
    });
  }

  function getDisplay(currTab: TabsType) {
    const props = {
      animation: animation,
      onExitComplete: onExitComplete,
      onEnterComplete: () => setAnimation(Animation.Idle),
    }
    
    switch (true) {
      case currTab === Tabs.Info:
        return <InfoTab {...props} />;

      case currTab === Tabs.Photos:
        return <PhotoTab {...props} />;

      case currTab === Tabs.Socials:
        return <SocialsTab {...props} />;

      default:
        return <InfoTab {...props} />;
    }
  }

  return (
    <div className="tab-container">
      {getDisplay(currentTab)}
    </div>
  );
}