import {useSWR} from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useUsers = () => {
  const {
    data: users = [],
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR('/api/all-users', fetcher);

  return {
    users,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};

export default useUsers;