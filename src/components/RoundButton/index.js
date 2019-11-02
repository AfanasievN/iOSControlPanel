import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from '../../globalStyles';
import PropTypes from 'prop-types';
import styles from './styles';

const RoundButton = ({onPress, iconName, color}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      {
        backgroundColor: color || COLORS.lightgray,
      },
    ]}>
    <Icon name={iconName} color={COLORS.white} size={FONTS.title1} />
  </TouchableOpacity>
);

RoundButton.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RoundButton;
