import {StyleSheet} from 'react-native';
import {GUTTERS, RADIUS} from '../../globalStyles';

const styles = StyleSheet.create({
  container: {
    width: 60,
    aspectRatio: 1,
    alignItems: 'center',
    margin: GUTTERS.xsmall1,
    justifyContent: 'center',
    borderRadius: RADIUS.xLarge,
  },
});

export default styles;
