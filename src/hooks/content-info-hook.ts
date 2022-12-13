import {useObserver} from 'mobx-react';
import React from 'react';
import {useContentInfoStore} from '../store/data/content/content-info-manager';
import {useNotify} from './notify';

export function useContentInfo({movie_id}: {movie_id: string}) {
  let infoManager = useContentInfoStore();

  React.useEffect(() => {
    infoManager.loadContent(movie_id);
  }, []);

  return useObserver(() => ({
    data: infoManager.items[movie_id],
  }));
}
