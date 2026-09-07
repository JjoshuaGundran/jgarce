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
  className: string,
  isLast: boolean,
  component: (props: ITabCardProps) => React.JSX.Element,
}

export interface ITabCardProps extends ITabProps {
  idx: number,
  className: string,
  total: number,
  isLast: boolean,
}

export const Animation = {
  Idle: "idle",
  Exiting: "exiting",
  Entering: "entering",
}

export type AnimationState = typeof Animation[keyof typeof Animation];