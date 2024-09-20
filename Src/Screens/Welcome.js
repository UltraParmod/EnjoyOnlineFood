import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Utils/Colors';
import StatusBarr from '../Components/StatusBarr';
import ImagePath from '../Utils/ImagePath';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation=useNavigation()
  return (
    <LinearGradient
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      colors={[Colors.Primary, Colors.Secondary]}>
      <StatusBarr backgroundColor={Colors.Primary} />
      <View
        style={{
          marginTop: responsiveHeight(-18),
          backgroundColor: Colors.White,
          width: responsiveWidth(60),
          height: responsiveWidth(60),
          borderRadius: responsiveWidth(60),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={ImagePath.Splash}
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(35),
            resizeMode: 'center',
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: responsiveHeight(10),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('TabsNavigation')
        }}
          style={{
            marginBottom: responsiveHeight(5),
            alignItems: 'center',
            width: '60%',
            backgroundColor: Colors.White,
            padding: responsiveWidth(3),
            borderRadius: responsiveWidth(20),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: Colors.Black,
              fontWeight: '600',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            fontWeight: '500',
            color: Colors.White,
            textAlign: 'center',
          }}>
          ​𝖤𝗇𝗃𝗈𝗒 𝖮𝗇𝗅𝗂𝗇𝖾 𝖥𝗈𝗈𝖽​
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: responsiveFontSize(2),
            color: Colors.Black,
            fontWeight: '400',
            marginTop: responsiveHeight(-0.3),
          }}>
          Sweet India Sweet Dreams{' '}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
