import React from 'react'
import { StyleSheet,View,Text, Image } from 'react-native'
import { global,images } from '../styles/global'
import Card from '../shared/Card';


export default function ReviewDetails({navigation,route}){
    const{title,body,rating} = route.params;
    return(
            <View style={global.container}>
        <Card>
            <Text style={global.titleText}>{title}</Text>
            <Text>{body}</Text>
            <View style={styles.img}>
                <Text>rating: <Image  source={
                  images.ratings[rating]                
                    } />
        </Text>
            </View>
        </Card>
        </View>    
    )
}

const styles = StyleSheet.create({
    img:{
       borderTopWidth:1,
       marginTop:16,
       paddingTop:6,
       borderTopColor: '#ccc',
       alignItems:'center',
    }
})