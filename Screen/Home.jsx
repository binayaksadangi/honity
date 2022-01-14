import React,{useState} from 'react'
import { StyleSheet,View,Text, TouchableOpacity, FlatList } from 'react-native'
import { global } from '../styles/global'

export default function Home({navigation}){
  const [reviews,setReviews] = useState([
      {title:'Review 1',body:'This is the first review',rating:5,key:'1'},
      {title:'Review 2',body:'This is the second review',rating:4,key:'2'},
      {title:'Review 3',body:'This is the third review',rating:3,key:'3'},
      {title:'Review 4',body:'This is the fourth review',rating:2,key:'4'},
      {title:'Review 5',body:'This is the fifth review',rating:1,key:'5'},
        
  ]) 
    return(
        <View style={global.container}>
          <FlatList 
          data={reviews}
          renderItem={({item})=>(
              <TouchableOpacity onPress={()=>{navigation.navigate('Review',item)}}> 
                  <Text style={global.titleText}>{item.title}</Text>
              </TouchableOpacity>
          )}
          />  
        </View>
    )
}

