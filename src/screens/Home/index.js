import React, {Component} from 'react';
import {
  TouchableOpacity,
  LayoutAnimation,
  SafeAreaView,
  UIManager,
  StatusBar,
  Alert,
  Text,
  View,
} from 'react-native';
import RoundButtonWithTitle from '../../components/RoundButtonWithTitle';
import {COLORS, FONTS, GUTTERS} from '../../globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SquareButton from '../../components/SquareButton';
import RoundButton from '../../components/RoundButton';
import {AnimType} from '../../animations';
import styles from './styles';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class HomeScreen extends Component {
  state = {
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

  _handleToggle = (name, value) => {
    const flightModeSelected = name === 'plane';
    const calculatorSelected = name === 'calculator';
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

  render() {
    const state = this.state;

    if (state.showDeepControls) {
      return (
        <SafeAreaView style={styles.safeArea}>
          <StatusBar hidden={true} />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              LayoutAnimation.configureNext(AnimType.onLongPressAnim);
              this.setState({showDeepControls: !state.showDeepControls});
            }}
            style={styles.deepControlsButton}>
            <TouchableOpacity
              style={styles.deepControlsContainer}
              activeOpacity={1}
              onPress={() => {}}>
              <View style={styles.deepControls}>
                <RoundButtonWithTitle
                  onPress={() => this._handleToggle('plane', !state.plane)}
                  footnote={state.plane ? 'Вкл' : 'Выкл'}
                  color={state.plane && 'orange'}
                  title={'Авиарежим'}
                  iconName={'plane'}
                />
                <View style={styles.divider} />
                <RoundButtonWithTitle
                  onPress={() => this._handleToggle('signal', !state.signal)}
                  footnote={state.signal ? 'Вкл' : 'Выкл'}
                  color={state.signal && 'lightgreen'}
                  title={'Сотовые данные'}
                  iconName={'signal'}
                />
              </View>
              <View style={styles.deepControls}>
                <RoundButtonWithTitle
                  onPress={() => this._handleToggle('wifi', !state.wifi)}
                  footnote={state.wifi ? ':) подкл.' : 'Не подкл.'}
                  color={state.wifi && 'royalblue'}
                  title={'Wi-Fi'}
                  iconName={'wifi'}
                />
                <View style={styles.divider} />
                <RoundButtonWithTitle
                  onPress={() =>
                    this._handleToggle('bluetoothB', !state.bluetoothB)
                  }
                  footnote={state.bluetoothB ? 'Apple Watch 4' : 'Выкл'}
                  color={state.bluetoothB && 'royalblue'}
                  iconName={'bluetooth-b'}
                  title={'Bluetooth'}
                />
              </View>
              <View style={styles.deepControls}>
                <RoundButtonWithTitle
                  onPress={() => this._handleToggle('airdrop', !state.airdrop)}
                  footnote={'Только для контактов'}
                  color={state.airdrop && 'royalblue'}
                  title={'AirDrop'}
                  iconName={'circle-o'}
                />
                <View style={styles.divider} />
                <RoundButtonWithTitle
                  onPress={() => this._handleToggle('modem', !state.modem)}
                  footnote={state.modem ? '0 подключений' : 'Выкл'}
                  color={state.modem && 'royalblue'}
                  title={'Режим модема'}
                  iconName={'plug'}
                />
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <View style={styles.topLine} />
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            onLongPress={() => {
              LayoutAnimation.configureNext(AnimType.onLongPressAnim);
              this.setState({showDeepControls: !state.showDeepControls});
            }}
            activeOpacity={0.5}
            style={[
              styles.box,
              {
                backgroundColor: COLORS.gray,
              },
            ]}>
            <RoundButton
              onPress={() => this._handleToggle('plane', !state.plane)}
              color={state.plane && 'orange'}
              iconName={'plane'}
            />
            <RoundButton
              onPress={() => this._handleToggle('signal', !state.signal)}
              color={state.signal && 'green'}
              iconName={'signal'}
            />
            <RoundButton
              onPress={() => this._handleToggle('wifi', !state.wifi)}
              color={state.wifi && 'royalblue'}
              iconName={'wifi'}
            />
            <RoundButton
              onPress={() =>
                this._handleToggle('bluetoothB', !state.bluetoothB)
              }
              color={state.bluetoothB && 'royalblue'}
              iconName={'bluetooth-b'}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.boxRight,
              {
                backgroundColor: COLORS.gray,
              },
            ]}>
            <View style={styles.boxRightTitleBox}>
              <Text style={styles.boxRightTitle}>Музыка</Text>
            </View>
            <View style={styles.boxRightControls}>
              <Icon name={'backward'} size={FONTS.title} color={COLORS.gray} />
              <TouchableOpacity
                onPress={() => this._handleToggle('play', !state.play)}>
                <Icon
                  name={state.play ? 'pause' : 'play'}
                  color={COLORS.white}
                  size={FONTS.title1}
                />
              </TouchableOpacity>
              <Icon name={'forward'} size={FONTS.title} color={COLORS.gray} />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.content,
            {
              paddingTop: GUTTERS.small,
            },
          ]}>
          <View style={styles.midBoxLeft}>
            <View style={styles.midBoxLeftControls}>
              <SquareButton
                onPress={() =>
                  this._handleToggle('unlockAlt', !state.unlockAlt)
                }
                color={state.unlockAlt && COLORS.white}
                iconColor={state.unlockAlt && 'red'}
                iconName={'unlock-alt'}
              />
              <SquareButton
                onPress={() => this._handleToggle('moon', !state.moon)}
                iconColor={state.moon && 'purple'}
                color={state.moon && 'white'}
                iconName={'moon-o'}
              />
            </View>
            <View style={styles.midBoxLeftRight}>
              <View style={styles.repeatScreenBtn}>
                <Icon
                  color={COLORS.white}
                  size={FONTS.title1}
                  name={'desktop'}
                />
                <Text style={styles.repeatScreenTitle}>Повтор{'\n'}экрана</Text>
              </View>
            </View>
          </View>
          <View style={styles.midBoxRight}>
            <View style={styles.midBoxBar}>
              <Icon name={'sun-o'} size={FONTS.title1} color={COLORS.white} />
            </View>
            <View style={styles.midBoxBar}>
              <Icon
                color={COLORS.white}
                size={FONTS.title1}
                name={'volume-up'}
              />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View
            style={[
              styles.midBoxLeft,
              {
                marginRight: GUTTERS.small,
              },
            ]}>
            <View style={styles.midBoxLeftControls}>
              <SquareButton
                onPress={() =>
                  this._handleToggle('lightbulb', !state.lightbulb)
                }
                iconColor={state.lightbulb && 'royalblue'}
                color={state.lightbulb && 'white'}
                iconName={'lightbulb-o'}
              />
              <SquareButton
                onPress={() => this._handleToggle('calculator', null)}
                iconName={'calculator'}
              />
            </View>
            <View style={styles.midBoxLeftControls}>
              <SquareButton
                onPress={() => this._handleToggle('circle', !state.circle)}
                iconColor={state.circle && 'red'}
                color={state.circle && 'white'}
                iconName={'circle-o'}
              />
            </View>
          </View>
          <View style={styles.footerRight}>
            <View style={styles.midBoxLeftControls}>
              <SquareButton
                onPress={() => this._handleToggle('camera', null)}
                iconName={'camera'}
              />
              <SquareButton
                iconName={state.battery ? 'battery-full' : 'battery-half'}
                onPress={() => this._handleToggle('battery', !state.battery)}
                iconColor={state.battery && 'orange'}
                color={state.battery && 'white'}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
