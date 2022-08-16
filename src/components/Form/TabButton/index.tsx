import React from "react";
import { Text, View,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export function TabButton(){
  return(
    <View style={{flex:1}}>
      <TouchableOpacity style={{position:'absolute',width:40,height:40,alignItems:'center',justifyContent:'center',right:30,bottom:30,backgroundColor:'#0076cb',borderRadius:50}}>
        <MaterialCommunityIcons size={40} name='plus'/>
      </TouchableOpacity>
    </View>
  )
}
