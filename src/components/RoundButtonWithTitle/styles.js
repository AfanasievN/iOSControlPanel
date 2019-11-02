import {StyleSheet} from 'react-native';
import {FONTS, GUTTERS, RADIUS} from '../../globalStyles';

const styles = StyleSheet.create({
  container: {
    width: 60,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.xLarge,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: FONTS.caption,
    marginTop: GUTTERS.small,
  },
  footnote: {
    color: 'white',
    fontWeight: '300',
    textAlign: 'center',
    fontSize: FONTS.caption,
    marginTop: GUTTERS.small,
  },
  button: {
    width: 120,
    aspectRatio: 1,
  },
});

export default styles;
