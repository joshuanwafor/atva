import {useObserver} from 'mobx-react';
import {useContentStore} from '../../store/data/content/content';
import React from 'react';
import {useAuthDataStore} from '../../store/data/user-auth';
import {useFeaturedContentStore} from '../../store/data/content/featured-content';

export function useAuthContent() {
  const store = useAuthDataStore();
  React.useEffect(() => {
    store.initialize();
  }, []);
  return useObserver(() => ({
    content: store.data,
    store: store,
  }));
}

export function useContent() {
  const store = useContentStore();
  React.useEffect(() => {
    store.initialize();
  }, []);
  return useObserver(() => ({
    content: store.data,
    store: store,
  }));
}

export function useFeaturedContent() {
  const store = useFeaturedContentStore();
  React.useEffect(() => {
    store.initialize();
  }, []);
  return useObserver(() => ({
    content: store.data,
  }));
}
