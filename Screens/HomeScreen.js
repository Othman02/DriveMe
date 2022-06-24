import {Text, View ,SafeAreaView ,Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

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

             <GooglePlacesAutocomplete
             placeholder="Where From?"
             nearbyPlacesAPI="GooglePlacesSearch"
             debounce ={400}
             />

            <NavOptions/>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen