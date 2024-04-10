import { StyleSheet, Text, View, Image, Button, Alert, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
    const navigation = useNavigation()
    const image1 = require('../assets/sproutbr.png')

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#DCFFCB', '#FFF', '#DCFFCB']}
                style={styles.gradient}>
                <Image style={styles.sprout} source={image1}></Image>
            </LinearGradient>
            <Text style={styles.text1}>Schedule Your</Text>
            <Text style={styles.text1}> Garden</Text>
            <Text style={styles.text2}>Schedule your garden work with our calendar and get reminders. Guide your garden with ease.</Text>
            <Pressable style={styles.b1}
                title="Press me"
                onPress={() =>
                    navigation.navigate('Home')}
            >
                <Text style={styles.text3}>Start Using the App</Text>
            </Pressable>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sprout: {
        width: width * 0.9,
        height: height * 0.35,
        borderRadius: 10,
        backgroundColor: '#DCFFCB',
    },

    text1: {
        color: '#284400',
        fontFamily: 'RobotoSerif',
        fontSize: width * 0.08,
        fontWeight: '600',
        lineHeight: height * 0.06,
        marginTop: height * 0.05,
    },

    text2: {
        color: '#284400',
        fontFamily: 'Roboto',
        fontSize: width * 0.06,
        fontWeight: '400',
        lineHeight: height * 0.05,
        marginTop: height * 0.05,
        textAlign: 'center',
        paddingHorizontal: width * 0.05,
    },
    b1: {
        width: width * 0.9,
        height: height * 0.06,
        borderRadius: 10,
        backgroundColor: '#289705',
        marginTop: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text3: {
        color: '#FFF',
        fontFamily: 'Poppins',
        fontSize: width * 0.05,
        fontWeight: '700',
        lineHeight: height * 0.045,
    }
})
