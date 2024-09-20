
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppWrapper({children}) {
  return (
    <SafeAreaView style={{flex:1}}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
