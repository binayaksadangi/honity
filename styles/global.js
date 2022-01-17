import { StyleSheet } from "react-native";

export  const global = StyleSheet.create({
    container:{
        borderColor:'#072227',
        borderWidth:1,
        padding:18,
        marginTop:15,
        
        marginHorizontal:10,
    },
    titleText:{
        // borderColor:'#072227',
        // borderWidth:1,
        textAlign:'center',
        fontSize:25,
        fontFamily:'Poppins-Regular',
        color:'#072227',
        marginBottom:4,
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
        fontSize:18,
    }
});

export const images = {
    ratings:{
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}