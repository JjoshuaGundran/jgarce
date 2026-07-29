export interface Tab {
  name: TabsType,
  isLarge: boolean,
}
export const Tabs = {
  Info: 'Info',
  Socials: 'Socials',
  Photos: 'Photos',
}
export type TabsType = typeof Tabs[keyof typeof Tabs];