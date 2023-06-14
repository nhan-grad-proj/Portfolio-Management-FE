import { useQuery } from 'react-query';
import { User } from '../../domain/entities/user.types';

export function useQueryMyProfile() {
  const { data, status } = useQuery({
    queryKey: 'QUERY_MY_PROFILE',
    queryFn: () => {
      return {} as User;
    }
  });

  return {
    profile: data,
    status
  };
}
