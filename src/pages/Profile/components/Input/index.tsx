import React from 'react';
import {Text, TextInput, View, TextInputProps} from 'react-native';

//Styles
import styles from './style';

//Interface
import {IInput} from './interface';

const LOGO = require('@assets/logo-white.png');

const Login = ({
  label = '',
  value = '',
  placeholder = '',
  onChangeText = () => null,
  style = {},
  ...otherProps
}: IInput & TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        placeholderTextColor="#999"
        cursorColor={'#141c24'}
        {...otherProps}
      />
    </View>
  );
};

export default Login;
