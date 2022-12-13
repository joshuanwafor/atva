import * as React from 'react';
import {View} from 'react-native';
import Episode from './episode';
import {Season as SeasonType} from '../../../interface';
import {Movie} from '../../../interface/content';
import {SeasonHeader} from './season-header';

interface TProps {
  params: Readonly<{
    movie: Movie;
    isWatching?: boolean;
    isCinema?: boolean;
  }>;
}

const Seasons = React.memo(function (_props: TProps) {
  const [activeSeason, setActiveSeason] = React.useState(0);

  const changeSeason = React.useCallback((index: number) => {
    setActiveSeason(index);
  }, []);

  const seasons: SeasonType[] = [
    {
      id: '1',
      season: '1',
      title: 'Season 1',
      year: '2020',
      synopsis:
        "When Sheldon learns that Leonard came home early to be with penny, his feelings are hurt. Howard can't understand why he's feeling fat and vulnerable.",
      data: [
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          episode: 'Episode 1',
          isWatching: true,
          id: 'beati-belicossi',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi-asd',
          episode: 'Episode 2',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi-hj',
          episode: 'Episode 3',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi-hsdfj',
          episode: 'Episode 4',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
      ],
    },
    {
      id: '2',
      season: '2',
      title: 'Season 2',
      year: '2020',
      synopsis:
        "When Sheldon learns that Leonard came home early to be with penny, his feelings are hurt. Howard can't understand why he's feeling fat and vulnerable.",
      data: [
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi',
          episode: 'Episode 1',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi-asd',
          episode: 'Episode 1',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi-hj',
          episode: 'Episode 1',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
      ],
    },
    {
      id: '3',
      season: '3',
      title: 'Season 3',
      year: '2020',
      synopsis:
        "When Sheldon learns that Leonard came home early to be with penny, his feelings are hurt. Howard can't understand why he's feeling fat and vulnerable.",
      data: [
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi',
          episode: 'Episode 1',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi-asd',
          episode: 'Episode 1',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
        {
          title: 'Beati Bellicossi',
          duration: {hour: 1, minute: 40, second: 55},
          isWatched: false,
          isWatching: false,
          id: 'beati-belicossi-hj',
          episode: 'Episode 1',
          banner:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1595571011/astra/movie-card-v2-2_q284ny.png',
        },
      ],
    },
  ];

  return (
    <View style={{marginBottom: 20, paddingTop: 20}}>
      <SeasonHeader
        changeSeason={changeSeason}
        season={seasons[activeSeason]}
        seasons={seasons}
      />
      {seasons[activeSeason].data.map((episode) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </View>
  );
});

export default Seasons;
