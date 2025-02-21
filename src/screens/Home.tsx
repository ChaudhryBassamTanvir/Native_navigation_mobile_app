import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {RootStackPramList} from "../App"
import ProductItem from '../components/ProductItem'
ProductItem
import Separator from '../components/Separator'
import { PRODUCTS } from '../data/constant'


const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})