import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import ImagePath from '../Utils/ImagePath';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../Utils/Colors';

const Category = () => {
    const [selected,setSelected]=useState(0)
  const catsData = [
    'All',
    'Burger',
    'Pizza',
    'Desserts',
    'Drinks',
    'Fruits',
    'Vegetables',
    'Beverages',
    'other',
  ];
  return (
    <View style={{paddingHorizontal:responsiveWidth(4)}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={catsData}
        renderItem={({item, index}) => {
          return (
            <View>

                <TouchableOpacity 
                    onPress={()=>{
                            setSelected(index)
               }}
                activeOpacity={.7} style={{margin:responsiveWidth(2),justifyContent:'center',alignItems:'center',}}>
                  <View style={{borderRadius:responsiveWidth(2),backgroundColor:selected===index?Colors.Primary :'lightgray',padding:responsiveWidth(2)}}>
                    <Image
                      source={ImagePath.Splash}
                      style={{width: 45, height: 45, borderRadius: 45,backgroundColor:Colors.Secondary}}
                    />
                  </View>
                  <Text style={{marginTop:responsiveHeight(.5),fontSize:responsiveFontSize(2),color:selected==index?Colors.Primary:'gray',fontWeight:selected==index?'700':null}}>{item}</Text>
                </TouchableOpacity>
                
            </View>
          );
        }}
      />
    
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
