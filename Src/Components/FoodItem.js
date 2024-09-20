import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImagePath from '../Utils/ImagePath';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Utils/Colors';
import VectorIcon from '../Utils/VectorIcon';
import { useNavigation } from '@react-navigation/native';

const FoodItem = () => {
  const navigation=useNavigation()
  const food = [
    {
      id: 1,
      name: 'Chicken',
      price: 10,
      image: ImagePath.Splash,
    },
    {
      id: 2,
      name: 'Pizza',
      price: 160,
      image: ImagePath.Splash,
    },
    {
      id: 3,
      name: 'Burger',
      price: 130,
      image: ImagePath.Splash,
    },
    {
      id: 4,
      name: 'Vegitable',
      price: 20,
      image: ImagePath.Splash,
    },
  ];
  return (
    <View style={{margin: responsiveScreenWidth(4)}}>
      <Text
        style={{
          color: Colors.Black,
          fontSize: responsiveFontSize(2.7),
          paddingHorizontal: responsiveScreenWidth(2),
          marginBottom: responsiveHeight(1),
          fontWeight: '600',
        }}>
        FoodItem
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={food}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={()=>{
                navigation.navigate('Details' ,{data:item})
                // console.log('data',index)
              }}
                style={{
                  backgroundColor: 'lightgray',
                  width: responsiveScreenWidth(35),
                  height: responsiveHeight(21),
                  marginRight: responsiveWidth(4),
                  borderRadius: responsiveWidth(4),
                  paddingHorizontal: responsiveWidth(2),
                }}>
                <View>
                  <Image
                    source={item.image}
                    style={{
                      alignSelf: 'center',
                      width: responsiveWidth(30),
                      height: responsiveHeight(10),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    textAlign: 'center',
                    color: Colors.Black,
                    fontWeight: '600',
                  }}>
                  {item?.name}
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: responsiveHeight(2),
                    width: '100%',
                    paddingHorizontal: responsiveWidth(1),
                  }}>
                  <Text
                    style={{
                      marginLeft: responsiveScreenWidth(2),
                      fontSize: responsiveFontSize(2),
                      color: Colors.Secondary,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    $ {item?.price}
                  </Text>
                  <VectorIcon
                    type={'Ionicons'}
                    name={'add-circle'}
                    color={'green'}
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
