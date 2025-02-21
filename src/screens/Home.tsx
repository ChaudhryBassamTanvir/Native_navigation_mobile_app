import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {RootStackPramList} from "../App"
import ProductItem from '../components/ProductItem'
ProductItem
import Separator from '../components/Separator'
import { PRODUCTS } from '../data/constant'

type HomeProps = NativeStackScreenProps<RootStackPramList,"Home">


const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>

<FlatList
data={PRODUCTS}
keyExtractor={item=>item.id}
ItemSeparatorComponent={Separator}
renderItem={({item})=>(


    <Pressable>


        <ProductItem product={item}/>
    </Pressable>
)}
/>





    </View>
  )
}

export default Home

const styles = StyleSheet.create({


    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#FFFFFF'
    }
})