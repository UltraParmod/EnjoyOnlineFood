import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

export const item=createContext()

export default function ContextApi({children}) {
    const [myBag, setMyBag]=useState([])
  return <item.Provider value={{myBag,setMyBag}}>
    {children}
  </item.Provider>
}

const styles = StyleSheet.create({})