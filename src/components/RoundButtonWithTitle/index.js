import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from '../../globalStyles';
import PropTypes from 'prop-types';
import styles from './styles';

const RoundButtonWithTitle = ({onPress, iconName, footnote, title, color}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View
      style={[
        styles.container,
        {
          alignSelf: 'center',
          backgroundColor: color || COLORS.lightgray,
        },
      ]}>
      <Icon name={iconName} color={COLORS.white} size={FONTS.title1} />
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.footnote}>{footnote}</Text>
  </TouchableOpacity>
);

RoundButtonWithTitle.propTypes = {
  iconColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  iconName: PropTypes.string.isRequired,
  footnote: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default RoundButtonWithTitle;
