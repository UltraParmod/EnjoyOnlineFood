import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ImagePath from '../Utils/ImagePath';
import Colors from '../Utils/Colors';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.2)',
      }}>
      <Text
        style={{
          color: Colors.Black,
          fontSize: responsiveFontSize(3.2),
          fontWeight: '500',
        }}>
        Menu
      </Text>
      <View
        style={{
          width: responsiveWidth(10),
          height: responsiveWidth(10),
          backgroundColor: Colors.Secondary,
          borderRadius: responsiveWidth(10),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={ImagePath.Splash}
          style={{
            width: responsiveWidth(9),
            height: responsiveWidth(9),
            borderRadius: responsiveWidth(9),
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
