import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import RoundButtonWithTitle from '../../components/RoundButtonWithTitle';
import PropTypes from 'prop-types';
import styles from './styles';

const DeepControls = ({
  hideDeepControls,
  handleToggle,
  bluetoothB,
  airdrop,
  signal,
  modem,
  plane,
  wifi,
}) => (
  <TouchableOpacity
    onPress={hideDeepControls}
    style={styles.deepControlsButton}
    activeOpacity={1}>
    <TouchableOpacity
      style={styles.deepControlsContainer}
      activeOpacity={1}
      onPress={() => {}}>
      <View style={styles.deepControls}>
        <RoundButtonWithTitle
          onPress={() => handleToggle('plane', !plane)}
          footnote={plane ? 'Вкл' : 'Выкл'}
          color={plane && 'orange'}
          title={'Авиарежим'}
          iconName={'plane'}
        />
        <View style={styles.divider} />
        <RoundButtonWithTitle
          onPress={() => handleToggle('signal', !signal)}
          footnote={signal ? 'Вкл' : 'Выкл'}
          color={signal && 'lightgreen'}
          title={'Сотовые данные'}
          iconName={'signal'}
        />
      </View>
      <View style={styles.deepControls}>
        <RoundButtonWithTitle
          onPress={() => handleToggle('wifi', !wifi)}
          footnote={wifi ? ':) подкл.' : 'Не подкл.'}
          color={wifi && 'royalblue'}
          title={'Wi-Fi'}
          iconName={'wifi'}
        />
        <View style={styles.divider} />
        <RoundButtonWithTitle
          onPress={() => handleToggle('bluetoothB', !bluetoothB)}
          footnote={bluetoothB ? 'Apple Watch 4' : 'Выкл'}
          color={bluetoothB && 'royalblue'}
          iconName={'bluetooth-b'}
          title={'Bluetooth'}
        />
      </View>
      <View style={styles.deepControls}>
        <RoundButtonWithTitle
          onPress={() => handleToggle('airdrop', !airdrop)}
          footnote={'Только для контактов'}
          color={airdrop && 'royalblue'}
          title={'AirDrop'}
          iconName={'circle'}
        />
        <View style={styles.divider} />
        <RoundButtonWithTitle
          onPress={() => handleToggle('modem', !modem)}
          footnote={modem ? '0 подключений' : 'Выкл'}
          color={modem && 'royalblue'}
          title={'Режим модема'}
          iconName={'plug'}
        />
      </View>
    </TouchableOpacity>
  </TouchableOpacity>
);

DeepControls.propTypes = {
  hideDeepControls: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  bluetoothB: PropTypes.bool,
  airdrop: PropTypes.bool,
  signal: PropTypes.bool,
  modem: PropTypes.bool,
  plane: PropTypes.bool,
  wifi: PropTypes.bool,
};

export default DeepControls;
