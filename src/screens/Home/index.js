import React, {Component} from 'react';
import {
  SafeAreaView,
  UIManager,
  StatusBar,
  Animated,
  Alert,
} from 'react-native';
import DeepControls from './DeepControls';
import Controls from './Controls';
import styles from './styles';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animatedView = new Animated.Value(0);
    this.state = {
      showDeepControls: false,
      bluetoothB: false,
      lightbulb: false,
      unlockAlt: false,
      airdrop: false,
      battery: false,
      signal: false,
      circle: false,
      plane: false,
      moon: false,
      wifi: false,
      play: false,
    };
  }

  _handleToggle = (name, value) => {
    const calculatorSelected = name === 'calculator';
    const flightModeSelected = name === 'plane';
    const cameraSelected = name === 'camera';

    if (flightModeSelected) {
      this.setState({
        [name]: value,
        signal: false,
        wifi: false,
      });
    } else if (calculatorSelected || cameraSelected) {
      Alert.alert(name, `Вы открыли ${name}`);
    }

    this.setState({
      [name]: value,
    });
  };

  _openDeepControls = () => {
    Animated.timing(this.animatedView, {
      toValue: 100,
      duration: 100,
    }).start(() => {
      this.setState({showDeepControls: true}, () => {
        this.animatedValue.setValue(0);
        Animated.timing(this.animatedValue, {
          toValue: 100,
          duration: 500,
        }).start();
      });
    });
  };

  _hideDeepControls = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 500,
    }).start(() => {
      this.setState({showDeepControls: false}, () => {
        Animated.timing(this.animatedView, {
          toValue: 0,
          duration: 100,
        }).start();
      });
    });
  };

  render() {
    const state = this.state;
    const animatedScale = this.animatedValue.interpolate({
      inputRange: [0, 75, 100],
      outputRange: [0.6, 0.9, 1],
    });
    const animatedOpacity = this.animatedValue.interpolate({
      inputRange: [0, 25, 50, 75, 100],
      outputRange: [0, 0.3, 0.5, 1, 1],
    });
    const animatedViewOpacity = this.animatedView.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [1, 0.5, 0],
    });

    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden={true} />
        {state.showDeepControls ? (
          <Animated.View
            style={[
              styles.container,
              {
                opacity: animatedOpacity,
                transform: [{scale: animatedScale}],
              },
            ]}>
            <DeepControls
              hideDeepControls={this._hideDeepControls}
              handleToggle={this._handleToggle}
              {...state}
            />
          </Animated.View>
        ) : (
          <Animated.View
            style={[
              styles.container,
              {
                opacity: animatedViewOpacity,
              },
            ]}>
            <Controls
              openDeepControls={this._openDeepControls}
              handleToggle={this._handleToggle}
              {...state}
            />
          </Animated.View>
        )}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
