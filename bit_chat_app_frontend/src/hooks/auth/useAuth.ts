import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import { auth } from '../../firebase';

export interface AuthenticatedUser {
  status: 'unauthenticated' | 'authenticated';
  userId?: string;
  email?: string | null;
  token?: string | null;
}

export const currentAuthenticatedUser = atom<AuthenticatedUser>({
  key: 'currentAuthenticatedUser',
  default: {
    status: 'unauthenticated',
  },
});

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useRecoilState(
    currentAuthenticatedUser,
  );

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      const uid = user?.uid;
      const email = user?.email;
      user?.getIdToken().then(token => {
        setCurrentUser({
          status: 'authenticated',
          userId: uid,
          email: email,
          token: token,
        });
      });
    });
  }, [setCurrentUser]);

  return { currentUser, setCurrentUser };
};
