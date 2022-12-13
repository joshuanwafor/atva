import {my_pubnub} from '../init/pubnub';
import {useAuthContent} from './content';

export function usePubnubHooks() {
  const authContent = useAuthContent();

  return {
    publishComment: (mov_id: string, comment: string) => {
      my_pubnub.publish(
        {
          // channel: `forum-` + mov_id,
          channel: 'demo-channel',
          message: {
            title: 'greeting',
            body: comment,
            user_id: authContent.content.content?.user.id,
            fullname:
              authContent.content.content?.user.first_name +
              ' ' +
              authContent.content.content?.user.last_name,
            email: authContent.content.content?.user.email,
            created_at: Date.now(),
          },
        },
        function (status, response) {
          console.log(status, response);
        },
      );
    },
  };
}
