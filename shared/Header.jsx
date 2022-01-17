import React from 'react'
import { StyleSheet,View,Text,Image,ImageBackground } from 'react-native'
import { global } from '../styles/global'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';


export default function Header(){
    const openMenu =()=>{
        console.log('Menu Opened')
    }
    return(
        <View style={styles.header}>
            <Ionicons name="ios-menu" size={24} color="black" onPress={()=>openMenu()} style={styles.icon}/>
            {/* Icon for Menu */}
            <View  style={styles.imgCont}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>HONITY</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        // borderWidth:1,
        // borderColor:'#000',
        height:"100%",
        width:"100%",
        flexDirection:'row',
        justifyContent:'center'
    },
    headerText:{
        letterSpacing:3,
        fontSize:30,
        // borderWidth:1,
        // borderColor:'#000',
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10,
    },
    icon:{
        position:'absolute',
        left:8,
    },
    imgCont:{
        // borderWidth:1,
        // borderColor:'#000',
        flexDirection:'row',
        marginRight:25,
    }
})