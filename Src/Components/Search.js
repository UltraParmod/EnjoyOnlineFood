import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Utils/Colors';
import VectorIcon from '../Utils/VectorIcon';

const Search = () => {
  return (
    <View
      style={{
        paddingHorizontal: responsiveWidth(3),
        flexDirection: 'row',
        marginHorizontal: responsiveWidth(4),
        backgroundColor: 'lightgray',
        // paddingVertical: responsiveHeight(0),
        borderRadius: responsiveWidth(30),
        marginVertical: responsiveHeight(2),
        alignItems:'center'
      }}>
      <VectorIcon name={'search'} type={'Feather'} size={25} color={Colors.Black} />
      <TextInput
        style={{ flex: 1, paddingLeft: responsiveWidth(1)}}
        placeholder="Search"
        placeholderTextColor={Colors.Black}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
