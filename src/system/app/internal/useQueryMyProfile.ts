import { useQuery } from 'react-query';
import { User } from '../../domain/entities/user.types';

export function useQueryMyProfile() {
  const { data, status } = useQuery({
    queryKey: 'QUERY_MY_PROFILE',
    queryFn: () => {
      return {
        id: '1',
        username: 'Phu Dang Ngoc'
      } as User;
    }
  });

  return {
    profile: data,
    status
  };
}
