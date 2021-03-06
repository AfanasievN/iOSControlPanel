import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from '../../globalStyles';
import PropTypes from 'prop-types';
import styles from './styles';

const SquareButton = ({onPress, iconName, iconColor, color}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      {
        backgroundColor: color || COLORS.gray,
      },
    ]}>
    <Icon
      name={iconName}
      color={iconColor || COLORS.white}
      size={FONTS.title1}
    />
  </TouchableOpacity>
);

SquareButton.propTypes = {
  iconColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SquareButton;
