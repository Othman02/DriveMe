import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'

import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import{GOOGLE_MAPS_APIKEY} from "@env" ;
import { setDestination } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';



const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <Text style={tw `text-center py-5 text-xl`}>Be kind</Text>
      <View style={tw`border-gray-200 flew-shink`}>
        <View>
        <GooglePlacesAutocomplete
             placeholder="Where to?"
              styles={ toInputBoxStyles }
              fetchDetails={true}
              minLength = {2}
              enablePoweredByContainer={false}
              onPress={( data , details = null ) => {
               dispatch(
                 setDestination ({
                 location:details.geometry.location,
                 description:data.description
               }))
               navigation.navigate("RideOptionsCard");
              }}
              returnKeyType={"search"}
              
              query={{
                key : GOOGLE_MAPS_APIKEY,
                language:'en'
              }}
             nearbyPlacesAPI="GooglePlacesSearch"
             debounce ={400}
             />

         </View>
         <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }
})