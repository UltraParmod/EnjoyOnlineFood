import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Colors from '../Utils/Colors';
import VectorIcon from '../Utils/VectorIcon';
import StatusBarr from '../Components/StatusBarr';
import { useNavigation } from '@react-navigation/native';

export default function OrderPleaced() {
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
                navigation.replace('TabsNavigation')
        },1000)
    },[])
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.White,
      }}>
      <StatusBarr backgroundColor={Colors.White} />
      <VectorIcon
        type={'AntDesign'}
        name={'checkcircle'}
        size={50}
        color={'green'}
      />
      <Text
        style={{
          fontSize: responsiveFontSize(3),
          color: Colors.Black,
          fontWeight: '700',
          marginVertical: responsiveHeight(1),
        }}>
        Order Placed Succesfully{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
