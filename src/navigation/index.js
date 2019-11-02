import {createStackNavigator} from 'react-navigation-stack';
import {NAV_TYPES} from './navTypes';

// Screens
import HomeScreen from '../screens/Home';

// Navigators
export default createStackNavigator(
  {
    [NAV_TYPES.HOME]: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.HOME,
  },
);
