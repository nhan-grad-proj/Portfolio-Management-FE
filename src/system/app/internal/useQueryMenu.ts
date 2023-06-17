import { useQuery } from 'react-query';
import { MenuItem } from '../../domain/entities/menu.types';

export function useQueryMenu() {
  const { data } = useQuery({
    queryKey: 'MENU',
    queryFn: () => {
      return [
        {
          id: 'dashboard.',
          name: 'Dashboard',
          accessLink: '/dashboard'
        },
        {
          id: 'analytics.',
          name: 'Analytics',
          accessLink: '/analytics'
        },
        {
          id: 'portfolio.',
          name: 'Portfolio',
          accessLink: '/portfolio'
        },
        {
          id: 'tools.',
          name: 'Tools',
          accessLink: '/tools'
        }
      ] as MenuItem[];
    }
  });

  return { menus: data };
}
