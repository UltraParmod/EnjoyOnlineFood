import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';

import Profile from './Profile';
import Cart from './Cart';
import Searches from './Searches';
import VectorIcon from '../Utils/VectorIcon';
import Colors from '../Utils/Colors';
import {Keyboard, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Tab = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: Colors.Secondary,
                  width: responsiveWidth(11),
                  height: responsiveWidth(11),
                  borderRadius: responsiveWidth(11),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <VectorIcon
                  type={'Entypo'}
                  name={'home'}
                  size={size}
                  color={Colors.White}
                />
              </View>
            ) : (
              <VectorIcon
                type={'AntDesign'}
                name={'home'}
                size={size}
                color={color}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Searches"
        component={Searches}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: Colors.Secondary,
                  width: responsiveWidth(11),
                  height: responsiveWidth(11),
                  borderRadius: responsiveWidth(11),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <VectorIcon
                  type={'AntDesign'}
                  name={'search1'}
                  size={size}
                  color={Colors.White}
                />
              </View>
            ) : (
              <VectorIcon
                type={'AntDesign'}
                name={'search1'}
                size={size}
                color={color}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: Colors.Secondary,
                  width: responsiveWidth(11),
                  height: responsiveWidth(11),
                  borderRadius: responsiveWidth(11),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <VectorIcon
                  type={'Entypo'}
                  name={'shopping-cart'}
                  size={size}
                  color={Colors.White}
                />
              </View>
            ) : (
              <VectorIcon
                type={'Feather'}
                name={'shopping-cart'}
                size={size}
                color={color}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: Colors.Secondary,
                  width: responsiveWidth(11),
                  height: responsiveWidth(11),
                  borderRadius: responsiveWidth(11),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <VectorIcon
                  type={'Ionicons'}
                  name={'person'}
                  size={size}
                  color={Colors.White}
                />
              </View>
            ) : (
              <VectorIcon
                type={'Ionicons'}
                name={'person-outline'}
                size={size}
                color={color}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
