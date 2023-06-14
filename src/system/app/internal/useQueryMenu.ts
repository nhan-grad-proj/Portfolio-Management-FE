import { useQuery } from 'react-query';
import { MenuItem } from '../../domain/entities/menu.types';

export function useQueryMenu() {
  const { data } = useQuery({
    queryKey: 'MENU',
    queryFn: () => {
      return [] as MenuItem[];
    }
  });

  return { menus: data };
}
