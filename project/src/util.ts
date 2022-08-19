import { AuthorizationStatus } from './const';
import { useAppSelector } from './hooks/index';

export const IsAuthorized = (): boolean => {
  const { authorizationStatus } = useAppSelector((state) => state);

  return authorizationStatus === AuthorizationStatus.Auth;
};
