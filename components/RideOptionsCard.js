import { SafeAreaView, StyleSheet ,Image , Text, View,TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';


const data=[
  {
    id:"Idriss",
    title:"Mercesdes C300 Coupe",
    image:"https://links.papareact.com/7pf",
  },
  {
    id:"Othman",
    title:"Audi Q2",
    image:"https://links.papareact.com/7pf",
  },
  {
    id:"Marwane",
    title:"Seat Ibiza",
    image:"https://links.papareact.com/3pn",
  },
]
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View >
        <TouchableOpacity 
        onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 p-3 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
      <Text style={tw`text-center justify-evenly  py-5 text-xl`} >Select a Ride -{travelTimeInformation?.distance.text}</Text>
      </View>
      <FlatList 
      data = {data} keyExtractor={(item) => item.id }
      renderItem={({item: {id,image},item})=>(
        <TouchableOpacity 
        onPress={() => setSelected(item)}
        style = {tw`flex-row items-center px-5 ${
          id === selected?.id && "bg-gray-200"
        }`}>
        
            <Image 
            style={{
                width:75,
                height:75,
                resizeMode:"contain",
            }}
            source={{ uri:image}}
            />
            <View style={tw`-ml-6`}>
            <Text style ={tw`text-xl font-semibold`}>{id}</Text>
            <Text>{travelTimeInformation?.duration.text} Travel Time</Text>  
             </View>
        </TouchableOpacity>
      )}
      />
      <View>
        <TouchableOpacity 
        disabled={!selected}
        style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text Style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})