import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, GUTTERS} from '../../globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SquareButton from '../../components/SquareButton';
import RoundButton from '../../components/RoundButton';
import DeepControls from './DeepControls';
import PropTypes from 'prop-types';
import styles from './styles';

const Controls = ({
  openDeepControls,
  handleToggle,
  bluetoothB,
  lightbulb,
  unlockAlt,
  battery,
  signal,
  circle,
  plane,
  moon,
  play,
  wifi,
}) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <View style={styles.topLine} />
    </View>
    <View style={styles.content}>
      <TouchableOpacity
        onLongPress={openDeepControls}
        activeOpacity={0.5}
        style={[
          styles.box,
          {
            backgroundColor: COLORS.gray,
          },
        ]}>
        <RoundButton
          onPress={() => handleToggle('plane', !plane)}
          color={plane && 'orange'}
          iconName={'plane'}
        />
        <RoundButton
          onPress={() => handleToggle('signal', !signal)}
          color={signal && 'green'}
          iconName={'signal'}
        />
        <RoundButton
          onPress={() => handleToggle('wifi', !wifi)}
          color={wifi && 'royalblue'}
          iconName={'wifi'}
        />
        <RoundButton
          onPress={() => handleToggle('bluetoothB', !bluetoothB)}
          color={bluetoothB && 'royalblue'}
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
          <TouchableOpacity onPress={() => handleToggle('play', play)}>
            <Icon
              name={play ? 'pause' : 'play'}
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
            onPress={() => handleToggle('unlockAlt', !unlockAlt)}
            color={unlockAlt && COLORS.white}
            iconColor={unlockAlt && 'red'}
            iconName={'unlock-alt'}
          />
          <SquareButton
            onPress={() => handleToggle('moon', !moon)}
            iconColor={moon && 'purple'}
            color={moon && 'white'}
            iconName={'moon-o'}
          />
        </View>
        <View style={styles.midBoxLeftRight}>
          <View style={styles.repeatScreenBtn}>
            <Icon color={COLORS.white} size={FONTS.title1} name={'desktop'} />
            <Text style={styles.repeatScreenTitle}>Повтор{'\n'}экрана</Text>
          </View>
        </View>
      </View>
      <View style={styles.midBoxRight}>
        <View style={styles.midBoxBar}>
          <Icon name={'sun-o'} size={FONTS.title1} color={COLORS.white} />
        </View>
        <View style={styles.midBoxBar}>
          <Icon color={COLORS.white} size={FONTS.title1} name={'volume-up'} />
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
            onPress={() => handleToggle('lightbulb', !lightbulb)}
            iconColor={lightbulb && 'royalblue'}
            color={lightbulb && 'white'}
            iconName={'lightbulb-o'}
          />
          <SquareButton
            onPress={() => handleToggle('calculator', null)}
            iconName={'calculator'}
          />
        </View>
        <View style={styles.midBoxLeftControls}>
          <SquareButton
            onPress={() => handleToggle('circle', !circle)}
            iconColor={circle && 'red'}
            color={circle && 'white'}
            iconName={'circle-o'}
          />
        </View>
      </View>
      <View style={styles.footerRight}>
        <View style={styles.midBoxLeftControls}>
          <SquareButton
            onPress={() => handleToggle('camera', null)}
            iconName={'camera'}
          />
          <SquareButton
            iconName={battery ? 'battery-full' : 'battery-half'}
            onPress={() => this._handleToggle('battery', !battery)}
            iconColor={battery && 'orange'}
            color={battery && 'white'}
          />
        </View>
      </View>
    </View>
  </View>
);

DeepControls.propTypes = {
  openDeepControls: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  bluetoothB: PropTypes.bool,
  lightbulb: PropTypes.bool,
  unlockAlt: PropTypes.bool,
  airdrop: PropTypes.bool,
  battery: PropTypes.bool,
  circle: PropTypes.bool,
  signal: PropTypes.bool,
  modem: PropTypes.bool,
  plane: PropTypes.bool,
  wifi: PropTypes.bool,
  moon: PropTypes.bool,
  play: PropTypes.bool,
};

export default Controls;
