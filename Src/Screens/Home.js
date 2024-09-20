import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppWrapper from '../Components/AppWrapper'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Category from '../Components/Category'
import Banner from '../Components/Banner'
import FoodItem from '../Components/FoodItem'
import Colors from '../Utils/Colors'

const Home = () => {
  return (
    <AppWrapper>
     
    <ScrollView showsVerticalScrollIndicator={false}  style={{flex:1,backgroundColor:Colors.White}}>
     <Header />
     <Search />
     <Category/>
     <Banner/>
     <FoodItem/>
    </ScrollView>
    </AppWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})