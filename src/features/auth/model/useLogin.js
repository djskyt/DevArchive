import { useMutation } from '@tanstack/react-query';
import { userApi } from '../../../entities/user/api/user.api';
import { useAuthStore } from '../../../shared/store/auth.store';

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: ({ email, password }) => userApi.login(email, password),
    onSuccess: (data) => {
      setAuth(data.token, data.user);
    },
  });
};