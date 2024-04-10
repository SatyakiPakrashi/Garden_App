import { StyleSheet, Text, View,Image,Dimensions,ImageBackground,Icon } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Home = () => {
    const unsplash = require('../assets/unsplash_JjT_7MwREm4.png')
    const search = require('../assets/search.png')
  return (
    <View style={styles.container}>
    <ImageBackground  style={styles.unsplash} source={unsplash}>
    <Icon source={search} style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }} /> 
    <Text style={styles.garden}>My Garden</Text> 
    <Text style={styles.mygarden}>John's Garden</Text>
    </ImageBackground> 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1, justifyContent: 'flex-start', alignItems: 'center',
    },
    unsplash:{ 
        backgroundColor:"transparent",
        width:wp('100%'),
        height:hp('45%'),
        viewBox:"0 0 500 500",
        preserveAspectRatio:"xMinYMin meet" 
    },
    garden:{
        backgroundColor:"transparent",
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 16,
        top:hp('14%'),
        right:wp('25%')
    },
    mygarden:{
        backgroundColor:"transparent",
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 30,
        top:hp('16%'),
        right:wp('20%')
    
    },
    search:{

    }
})