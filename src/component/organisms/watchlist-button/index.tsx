import React from 'react';
import Plus from '../../atoms/icons/plus';
import BlurButton from '../../molecules/button/blur-button';
import {MinimalContent} from '../../../interface/content';
import {useWatchlist} from '../../../hooks/content/user-list';
import {observer} from 'mobx-react-lite';
import {useWatchListStore} from '../../../store/data/user-lists/watchlist';
import IconButton from '../../molecules/button/icon-button';
import styled from 'styled-components/native';
import {Trash} from 'phosphor-react-native';

const ActionsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WatchlistActionButton: React.FC<{movie?: MinimalContent}> = ({
  movie,
}) => {
  let myWatchlist = useWatchlist();

  return (
    <BlurButton
      onPress={() => {
        let id = movie?.id ?? '';
        myWatchlist.store.add(id, movie?.title ?? '');
      }}
      icon={<Plus fill="#fff" width={12} height={12} />}>
      Add to watchlist
    </BlurButton>
  );
};

export const WatchlistActionButtonVert: React.FC<{
  movie: MinimalContent;
}> = observer(({movie}) => {
  let myWatchlistStore = useWatchListStore();

  return (
    <ActionsWrapper>
      <IconButton
        icon={<Plus fill="#fff" width={16} height={16} />}
        onPress={() => {
          let id = movie?.id ?? '';
          myWatchlistStore.add(id, movie?.title ?? '');
        }}>
        Watchlist
      </IconButton>
    </ActionsWrapper>
  );


});
