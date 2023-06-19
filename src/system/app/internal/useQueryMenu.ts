import { useQuery } from 'react-query';
import { MenuItem } from '../../domain/entities/menu.types';

export function useQueryMenu() {
  const { data } = useQuery({
    queryKey: 'MENU',
    queryFn: () => {
      return [
        {
          id: 'analytics.',
          name: 'Analytics',
          accessLink: '/analytics'
        },
        {
          id: 'transaction.',
          name: 'Transaction',
          accessLink: '/transaction'
        }
      ] as MenuItem[];
    }
  });

  return { menus: data };
}
