import {jText, View ,SafeAreaView ,Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
  return (
    <SafeAreaView style ={tw `bg-white h-full`} >
        <View style = {tw`p-5`}>
            
            <Image
             style = {{
                width: 150,
                height: 150,
                resizeMode:"contain"
             }}
             source={
                 //logo goes here
                require('./logo_driveme01.png')
             }
            />
            <NavOptions/>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen
