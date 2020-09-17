import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({title, style, titleStyle, disabled, handleClick}) => (
  <TouchableOpacity style={style} onPress={handleClick} disabled={disabled}>
    {!!title && <Text style={titleStyle}>{title}</Text>}
  </TouchableOpacity>
);

export default Button;
