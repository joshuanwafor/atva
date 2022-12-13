import {useObserver} from 'mobx-react';
import {useAuthDataStore} from '../store/data/user-auth';

export function useUser() {
  const {data} = useAuthDataStore();

  return useObserver(() => ({
    user: data.content,
  }));
}

export {};
