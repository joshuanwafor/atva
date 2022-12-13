import React from 'react';
import Plus from '../../atoms/icons/plus';
import BlurButton from '../../molecules/button/blur-button';
import {MinimalContent} from '../../../interface/content';
import {useWatchlist} from '../../../hooks/content/user-list';
import {observer} from 'mobx-react-lite';
import {useWatchListStore} from '../../../store/data/user-lists/watchlist';
import IconButton from '../../molecules/button/icon-button';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ActionsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WatchlistActionButton: React.FC<{movie?: MinimalContent}> = ({
  movie,
}) => {
  let myWatchlist = useWatchlist();

  if (myWatchlist.content.loading == true) {
    return <BlurButton isLoading={true}>loading...</BlurButton>;
  }

  let index = myWatchlist.content.items
    .slice()
    .findIndex((v) => v.itemId == movie?.id);

  if (index == -1) {
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
  }

  return (
    <BlurButton
      onPress={() => {
        myWatchlist.store.delete(movie?.id ?? '');
      }}
      isLoading={false}>
      Remove from watchlist
    </BlurButton>
  );
};

export const WatchlistActionButtonVert: React.FC<{
  movie: MinimalContent;
}> = observer(({movie}) => {
  let myWatchlistStore = useWatchListStore();

  if (myWatchlistStore.data.loading == true) {
    return <BlurButton isLoading></BlurButton>;
  }

  let index = myWatchlistStore.data.items.findIndex(
    (v) => v.itemId == movie.id,
  );

  if (index == -1) {
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
  }

  return (
    <ActionsWrapper>
      <IconButton
        icon={<MaterialIcons name="remove" size={16} color="#fff" />}
        onPress={() => {
          let id = movie?.id ?? '';
          myWatchlistStore.delete(id);
        }}>
        Watchlist
      </IconButton>
    </ActionsWrapper>
  );
});
