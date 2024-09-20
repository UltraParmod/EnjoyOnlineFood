import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Colors from '../Utils/Colors'
import ImagePath from '../Utils/ImagePath'

const Banner = () => {
  return (
    <View style={{marginHorizontal:responsiveWidth(4)}}>
      <Text style={{fontWeight:'400',fontSize:responsiveFontSize(2.5),color:Colors.Black,marginHorizontal:responsiveWidth(2.5),marginBottom:responsiveHeight(1),fontWeight:'500'}}>Promotions</Text>
      <View style={{backgroundColor:Colors.Secondary,minHeight:responsiveHeight(20),flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:responsiveWidth(8),borderRadius:responsiveWidth(3)}}>
        <View>
      <Text style={{fontSize:responsiveFontSize(2),color:Colors.White}}>Today Offer</Text>
      <Text style={{fontSize:responsiveFontSize(2.5),fontWeight:'600',color:Colors.White,marginVertical:responsiveHeight(1)}}>Free box of Friends</Text>
      <Text style={{fontSize:responsiveFontSize(1.5),color:Colors.White}}>on all Orders above $150    </Text>
        </View>
        <View style={{backgroundColor:Colors.White,width:responsiveWidth(25),height:responsiveWidth(25),borderRadius:responsiveWidth(2)}}>
        <Image source={ImagePath.Splash} resizeMode='center' style={{width:'100%',height:'100%'}} />
        </View>
      </View>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})