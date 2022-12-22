import Snackbar from 'react-native-snackbar';
import {theme} from '../style/theme';

export function useNotify() {
  function show(message: string) {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_SHORT,
      textColor: 'white',
      backgroundColor: theme.colors.blackTwo,
      fontFamily: theme.font.medium,
    
    });
  }
  return {show};
}
