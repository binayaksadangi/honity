import React from 'react'
import { StyleSheet,View,Text, Button } from 'react-native'
import { global } from '../styles/global'
export default function ReviewDetails({navigation,route}){
    const{title,body,rating} = route.params;
    return(
        <View style={global.container}>
            <Text style={global.titleText}>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
       
        </View>
    )
}
