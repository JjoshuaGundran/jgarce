export interface ITab {
  name: TabsType,
  isSmallScreenOnly: boolean,
}

export const Tabs = {
  Info: 'Info',
  Socials: 'Socials',
  Photos: 'Photos',
}

export type TabsType = typeof Tabs[keyof typeof Tabs];

export interface ITabProps {
  animation: AnimationState,
  onExitComplete: () => void,
  onEnterComplete: () => void,
}

export interface ITabCard {
  className: string;
  content: React.JSX.Element;
}

export const Animation = {
  Idle: "idle",
  Exiting: "exiting",
  Entering: "entering",
}

export type AnimationState = typeof Animation[keyof typeof Animation];