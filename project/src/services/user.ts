import { UserData } from '../types/user-data';

const USER_KEY_NAME = 'user-data';

export const getUser = (): UserData => {
  const data = localStorage.getItem(USER_KEY_NAME);

  return data
    ? JSON.parse(data)
    : {
      avatarUrl: '',
      email: '',
      id: 0,
      name: '',
      token: '',
    };
};

export const saveUser = (userData: UserData): void =>
  localStorage.setItem(USER_KEY_NAME, JSON.stringify(userData));

export const dropUser = (): void =>
  localStorage.removeItem(USER_KEY_NAME);

