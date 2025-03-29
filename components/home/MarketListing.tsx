import { View, Text, Image, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function MarketListing(){

    return (
        <View >
          <Text
          style={styles.container}
          >Add your products here</Text>
          
         
        </View>

        
    )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    fontSize: 27,
    fontWeight:'500',
    justifyContent:'center',
    textAlign:'center',
    textDecorationLine:'underline', 
    lineHeight: 40,
    textAlignVertical:'center',
    textTransform:'capitalize',

 
  }
});