import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { SidebarMenuItem } from '../../domain/entities/menu.types';
import { useQueryMenu } from './useQueryMenu';
import { toSidebarMenu } from './mappers/menu.mapper';

export function useMenu() {
  const { push } = useRouter();
  const { menus } = useQueryMenu();

  const items = useMemo(() => toSidebarMenu(menus ?? []), [menus]);

  const navigate = useCallback(
    (item: SidebarMenuItem) => {
      if (!item.accessLink || !item.subMenus.length) return;

      push(item.accessLink);
    },
    [push]
  );

  return {
    items,
    navigate
  };
}
