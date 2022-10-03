import React from 'react';
import {Text, TextProps} from 'react-native';

//Styles
import styles from './style';

const TextC = (props: TextProps) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

export default TextC;
