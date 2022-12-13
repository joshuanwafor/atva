import {PUSHER_APP_KEY, PUSHER_CLUSTER} from '../../config/config';
import Pusher from 'pusher-js/react-native';

export const pusher = new Pusher('7e7051fe0cf55f83ee81', {
  cluster: 'eu',
});
