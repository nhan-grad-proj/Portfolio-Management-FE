import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type MenuItem = {
  id: string;
  name: string;
  accessLink?: string;
  iconCode?: string;
  subMenus?: MenuItem[];
};

export type SidebarMenu = SidebarMenuItem[];

export type SidebarMenuItem = {
  id: string;
  name: string;
  accessLink?: string;
  icon: IconDefinition | undefined;
  subMenus: SidebarMenuItem[];
};
