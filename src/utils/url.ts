import { BASE_URL } from 'shared/config';

export const getAuth = {
  tokenReissuance: () => {
    return BASE_URL + 'signin/refresh';
  },
  confirmEmail: () => {
    return BASE_URL + 'signup/email';
  },
};

export const getUser = {
  getUserInfo: () => {
    return BASE_URL + 'user/';
  },
};
