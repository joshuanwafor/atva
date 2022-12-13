import React from 'react';
import {View, ScrollView} from 'react-native';
import {SParagraph} from '../../atoms/typography';
import SAvatar from '../../molecules/avatar';
import styled from 'styled-components/native';
import {theme} from '../../../style/theme';
import {my_pubnub} from '../../../init/pubnub';
import {useAuthContent} from '../../../hooks/content';
import {CommentCard} from './comment/comment-card';
import {usePubnubHooks} from '../../../hooks/pubnub';
import {TComment} from '../../../interface/models';

const CommentsInput = styled.TextInput`
  padding: 4px 12px;
  background: orange;
  border-radius: 6px;
  background-color: ${theme.colors.charcoalGrey};
  color: white;
`;

const ScreenActivity: React.FC<{}> = () => {
  const {publishComment} = usePubnubHooks();
  let [comment, setComment] = React.useState('');
  let [comments, setComments] = React.useState<TComment[] | undefined>(
    undefined,
  );

  React.useEffect(() => {
    my_pubnub.subscribe({
      channels: ['demo-channel'],
      withPresence: false,
    });

    my_pubnub.addListener({
      message: function (msg) {
        let newCommentsList: TComment[] = [];
        if (msg.channel !== 'demo-channel') return;
        if (comments != undefined) {
          newCommentsList = [...comments];
        }
        newCommentsList.push(msg.message);
        setComments(newCommentsList);
      },
    });

    my_pubnub.history({channel: 'demo-channel', count: 200}, (data, other) => {
      if (comments == undefined) {
        setComments(other.messages.map((v) => v.entry).slice());
      }
    });
  }, []);

  let page_comments = comments ?? [];
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <ScrollView>
        {page_comments.map((_v, i) => {
          return (
            <View key={i}>
              <CommentCard comment={_v} />
            </View>
          );
        })}
      </ScrollView>
      <View style={{padding: 12, flexDirection: 'row', alignItems: 'center'}}>
        <SAvatar
          size={30}
          source="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        />
        <View style={{flex: 1, paddingLeft: 12}}>
          <CommentsInput
            placeholder="Write a comment"
            value={comment}
            placeholderTextColor="gray"
            onSubmitEditing={async (e) => {
              publishComment('', comment);
              setComment('');
            }}
            onChangeText={(text: string) => {
              setComment(text);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ScreenActivity;
