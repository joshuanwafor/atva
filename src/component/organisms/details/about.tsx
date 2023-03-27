import * as React from 'react';
import HomeTitle from '../../molecules/home-title';
import AboutInfo from './info';
import {View} from 'react-native';
import {FeaturedContent, Movie} from '../../../interface/content';
import {RenderTickets} from '../tickets/render';
import {Box} from 'native-base';

interface TProps {
  params: Readonly<{
    content?: Movie | FeaturedContent;
    isWatching?: boolean;
    isCinema?: boolean;
  }>;
}

// About movie
const AboutMovie = function ({params}: TProps) {
  const movie = params.content;

  const TicketsItem = React.memo(function ({isCinema}: {isCinema: boolean}) {
    console.log(movie?.id);
    if (isCinema) {
      return (
        <RenderTickets
          tickets={movie?.premieres ?? []}
          contentId={movie?.id ?? ''}
        />
      );
    }
    return null;
  });
  const releaseD = new Date(movie?.releaseDate ?? '0').getFullYear();
  return (
    <View>
      <Box>
        <TicketsItem isCinema={params.isCinema ?? false} />
        <View style={{paddingTop: 20, flex: 1, height: '100%'}}>
          <AboutInfo
            title={movie?.title ?? ''}
            info={{
              poster:
                movie?.thumbnail_vertical?.url ??
                movie?.thumbnail_horizontal?.url ??
                movie?.banner?.small ??
                'https://res.cloudinary.com/quadzphoz/image/upload/v1594138300/astra/watching-card-5_m2w4mn.png',
              synopsis:
                movie?.description ??
                movie?.excerpt ??
                'When Sheldon learns that Leonard came home early to be with penny, his feelings are hurt. Howard can’t understand why he’s feeling fat and vulnerable.',
              staring:
                movie?.crews.map(item => {
                  return {
                    id: item.user.id,
                    name: item.user.name,
                    slug: item.user.name,
                    image: '',
                  };
                }) ?? [],
              meta: [
                {
                  title: 'Genre',
                  //movie?.genre.map(v => v.title).join(',') ??
                  content: 'N/A',
                  id: '1',
                },
                {
                  title: 'Released year',
                  content: movie?.year + '',
                  id: '2',
                },
                {title: 'Language', content: 'English', id: '3'},
              ],
            }}
          />
        </View>
      </Box>
    </View>
  );
};

export default AboutMovie;
