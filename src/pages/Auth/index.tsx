import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  Dimensions,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';

//Third Party
import auth from '@react-native-firebase/auth';
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

//Components
import Input from './components/Input';

//Styles
import styles from './style';

const LOGO = require('@assets/logo-white.png');
const {width, height} = Dimensions.get('window');

const Login = () => {
  const collection = firestore().collection('Users');
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rEmail, setREmail] = useState('');
  const [rPassword, setRPassword] = useState('');
  const [rSecureText, setRSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  const authTrans = useRef(new Animated.Value(0)).current;

  const login = () => {
    if ([email, password].includes('')) {
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurduğunuzdan emin olun.');
      return;
    }
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Loading');
      })
      .catch(error => {
        let err = 'Bilinmeyen bir nedenden dolayı hesabınızı oluşturamadık!';
        if (error.code === 'auth/wrong-password') {
          err = 'Kullanıcı adı vey aparola hatalı!';
        }
        if (error.code === 'auth/user-not-found') {
          err = 'Kayıtlarımızda böyle bir kullanıcı bulamadık!';
        }
        Alert.alert('Hata!', err);
      })
      .finally(() => setLoading(false));
  };

  const register = () => {
    if ([name, surname, rEmail, rPassword].includes('')) {
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurduğunuzdan emin olun.');
      return;
    }
    if (rPassword.length < 6) {
      Alert.alert('Uyarı', 'Parolanız en az 6 haneden oluşmalıdır!');
      return;
    }

    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(rEmail, rPassword)
      .then(res => {
        collection.doc(res?.user?.uid).set({name, surname});
        navigation.navigate('Loading');
      })
      .catch(error => {
        let err = 'Bilinmeyen bir nedenden dolayı hesabınızı oluşturamadık!';
        if (error.code === 'auth/email-already-in-use') {
          err = 'Bu e-posta hesabı zaten kullanımda!';
        }
        if (error.code === 'auth/invalid-email') {
          err = 'Bu e-posta hesabı geçersiz!';
        }
        Alert.alert('Hata!', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginHandle = () => {
    if (loading) {
      return;
    }
    customAnimateEvent(authTrans, 0, 300);
  };

  const registerHandle = () => {
    if (loading) {
      return;
    }
    customAnimateEvent(authTrans, 1, 300);
  };

  const customAnimateEvent = (
    refer: Animated.Value,
    value: number,
    duration: number,
    call?: () => null | undefined | void,
  ) =>
    Animated.timing(refer, {
      toValue: value,
      duration: duration,
      useNativeDriver: false,
    }).start(call);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <FastImage
          source={LOGO}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Animated.View
            style={[
              styles.animatedLoginBody,
              {
                transform: [
                  {
                    translateX: authTrans.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -width],
                    }),
                  },
                ],
              },
            ]}>
            <View style={styles.loginBody}>
              <Text>Hesabına giriş yap.</Text>
              <Input
                label="E-Posta"
                placeholder="eposta"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                caretHidden={false}
              />
              <Input
                label="Parola"
                placeholder="parola"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureText}
              />
            </View>
            <Pressable
              style={styles.buttonPress}
              onPress={login}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#141c24" />
              ) : (
                <Text style={styles.buttonText}>Giriş Yap</Text>
              )}
            </Pressable>
            <Text style={styles.registerText}>
              Henüz bir hesabın yok mu?{' '}
              <Text style={styles.registerTextLink} onPress={registerHandle}>
                Kayıt Ol
              </Text>
            </Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.animatedLoginBody,
              {
                transform: [
                  {
                    translateX: authTrans.interpolate({
                      inputRange: [0, 1],
                      outputRange: [width, 0],
                    }),
                  },
                ],
              },
            ]}>
            <View style={styles.loginBody}>
              <Text>Kişisel bilgileriniz ile kayıt olun.</Text>
              <Input
                label="Ad"
                placeholder="ad"
                value={name}
                onChangeText={setName}
              />
              <Input
                label="Soyad"
                placeholder="soyad"
                value={surname}
                onChangeText={setSurname}
              />
              <Input
                label="E-Posta"
                placeholder="eposta"
                value={rEmail}
                onChangeText={setREmail}
                keyboardType="email-address"
                caretHidden={false}
              />
              <Input
                label="Parola"
                placeholder="parola"
                value={rPassword}
                onChangeText={setRPassword}
                secureTextEntry={rSecureText}
              />
            </View>
            <Pressable
              style={styles.buttonPress}
              onPress={register}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#141c24" />
              ) : (
                <Text style={styles.buttonText}>Kayıt Ol</Text>
              )}
            </Pressable>
            <Text style={styles.registerText}>
              Zaten bir hesabın var mı?{' '}
              <Text style={styles.registerTextLink} onPress={loginHandle}>
                Giriş Yap
              </Text>
            </Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
