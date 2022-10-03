import React from 'react';
import {Linking, SafeAreaView, ScrollView, Text, View} from 'react-native';

//Third Party
import FastImage from 'react-native-fast-image';

//Styles
import styles from './style';

const LOGO = require('@assets/logo-white.png');

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FastImage source={LOGO} style={styles.logoStyle} resizeMode="contain" />
      <ScrollView style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Bitlo Teknoloji A.Ş</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Vergi Dairesi</Text>
          <Text style={styles.text}>Zincirlikuyu</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Vergi Kimlik No</Text>
          <Text style={styles.text}>170125790901214</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Sicil No</Text>
          <Text style={styles.text}>1255540-5</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Mersis No</Text>
          <Text style={styles.text}>0205859020000000002</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Adress</Text>
          <Text style={styles.text}>
            Esentepe Mahallesi Büyükdere Caddesi Ferko No:175/7 Levent, Şişli,
            İstanbul
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>E-posta Destek</Text>
          <Text style={styles.text}>destek@bitlo.com</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Telefon Destek</Text>
          <Text style={styles.text}>0850 532 68 40</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Gizlilik Politikası</Text>
          <Text
            style={[styles.text, {fontWeight: '700'}]}
            onPress={() =>
              Linking.openURL('https://www.bitlo.com/kullanim-kosullari')
            }>
            Kullanım Koşulları
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
