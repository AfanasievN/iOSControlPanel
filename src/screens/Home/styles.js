import {StyleSheet} from 'react-native';
import {COLORS, FONTS, GUTTERS, RADIUS} from '../../globalStyles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  container: {flex: 1},
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: '0.5%',
    paddingHorizontal: '6.5%',
  },
  topLine: {
    height: 5,
    width: '12%',
    alignSelf: 'center',
    borderRadius: RADIUS.base,
    marginTop: GUTTERS.xxLarge,
    backgroundColor: COLORS.gray,
  },
  box: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.regular,
    marginRight: GUTTERS.xsmall1,
  },
  boxRight: {
    flex: 1,
    marginLeft: GUTTERS.xsmall1,
    borderRadius: RADIUS.regular,
  },
  boxRightTitleBox: {
    flex: 1,
    alignItems: 'center',
  },
  boxRightTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: FONTS.body,
    marginTop: GUTTERS.xxLarge,
  },
  boxRightControls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  midBoxLeft: {
    flex: 1,
    marginRight: GUTTERS.xsmall1,
    paddingVertical: GUTTERS.xsmall,
  },
  midBoxLeftControls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  midBoxLeftRight: {
    flex: 1,
    justifyContent: 'center',
  },
  repeatScreenBtn: {
    width: '100%',
    aspectRatio: 2.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.regular,
    backgroundColor: COLORS.gray,
  },
  repeatScreenTitle: {
    marginLeft: 30,
    color: 'white',
  },
  midBoxRight: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: GUTTERS.xsmall,
    paddingVertical: GUTTERS.xsmall,
    justifyContent: 'space-between',
  },
  midBoxBar: {
    width: 74,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: RADIUS.regular,
    backgroundColor: COLORS.gray,
    paddingBottom: GUTTERS.xxLarge,
  },
  footerRight: {
    flex: 1,
    paddingLeft: GUTTERS.xsmall,
    paddingVertical: GUTTERS.xsmall,
  },
  divider: {
    width: 20,
    aspectRatio: 1,
  },
  deepControlsContainer: {
    padding: GUTTERS.xxLarge,
    borderRadius: RADIUS.regular,
    backgroundColor: COLORS.gray,
  },
  deepControlsButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deepControls: {
    flexDirection: 'row',
    padding: GUTTERS.base,
    justifyContent: 'space-between',
  },
});

export default styles;
