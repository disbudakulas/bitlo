import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

//Third Party
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

//Components
import Input from './components/Input';

//Styles
import styles from './stlye';

const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(auth()?.currentUser?.uid)
      .get()
      .then(res => {
        setName(res?.data()?.name);
        setSurname(res?.data()?.surname);
      });
    return () => {
      setName('');
      setSurname('');
    };
  }, []);

  const logout = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Auth');
      })
      .catch(err => {
        Alert.alert(
          'Hata!',
          'Bilinmeyen bir nedenden dolayı çıkış işlemi başarısız oldu!',
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const save = () => {
    setLoading(true);
    firestore()
      .collection('Users')
      .doc(auth()?.currentUser?.uid)
      .set({name, surname})
      .then(() => {
        Alert.alert(
          'İşlem Başarılı',
          'Kayıt işlemi başarılı bir şekilde gerçekleşmiştir.',
        );
      })
      .catch(err => {
        Alert.alert(
          'Hata!',
          'Bilinmeyen bir nedenden dolayı kayıt işlemi başarısız oldu!',
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Input
          label="E-Posta"
          value={auth()?.currentUser?.email?.toString()}
          style={{backgroundColor: '#aaa'}}
          editable={false}
        />
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
        <Text style={styles.save} onPress={() => (loading ? null : save())}>
          {loading ? <ActivityIndicator color={'#eee'} /> : 'Kaydet'}
        </Text>
      </View>
      <Pressable style={styles.buttonPress} onPress={logout}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;
