import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';

import {Colors} from '../../constants';

const Button = ({title, style, titleStyle, handleClick}) => (
  <TouchableOpacity style={style} onPress={handleClick}>
    {!!title && <Text style={titleStyle}>{title}</Text>}
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.any,
  titleStyle: PropTypes.any,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  title: 'Click',
  style: {
    borderRadius: 5,
    width: 60,
    height: 30,
  },
  titleStyle: {
    fontSize: 16,
    color: Colors.white,
    // color: Colors.white,
  },
};

export default Button;
