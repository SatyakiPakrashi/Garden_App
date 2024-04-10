import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'


const Splash = ({navigation}) => {
    const image = require('../assets/green_leaves_round_logo.png')
  return (
    
    <View style={styles.container}>
    <LinearGradient
                colors={['#DCFFCB', '#FFF', '#DCFFCB']}
                style={styles.gradient}>
      <Image style={{color:"black",fontSize:36,fontWeight:"800",top:hp('50%'),left:wp('17%')}} source ={image} ></Image>
      <Text style = {styles.bloom}>B</Text>
      <Text style = {styles.buddy}>loom</Text>
      <Text style = {styles.bloom}>B</Text>
      <Text style = {styles.buddy}>uddy</Text>
      </LinearGradient>

    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
    borderRadius: 10,    
    flex: 1,
    backgroundColor: 'var(--background, radial-gradient(177.54% 100.01% at 55.38% 100%, #DCFFCB 0%, #FFF 48.19%, #DCFFCB 100%))',
    // Other styles here
 
      // Other styles here
    display: 'flex',
    width: wp('100%'),
    height: hp('100%'),
    paddingVertical: 0,
    paddingHorizontal: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    },
    bloom:{
    color: '#55860D',
    textAlign: 'center',
    fontFamily:'Playball-regular',
    fontSize: hp('5%'),
    fontStyle: 'normal',
    fontWeight: '400',
    right:wp('5%'),
    top:hp('27%'),
     
    },

    buddy:{
    color: '#7DA00E',
    fontFamily: 'Playball',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
    left:wp('48%'),
    top:hp('21.5%'),

    },
    gradient:{
        height:hp('120%'),
        width:wp('100%'),
    }
  });