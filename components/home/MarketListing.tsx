import { View, Text, Image, StyleSheet } from "react-native";

export default function MarketListing(){

    return (
        <View style={styles.container}>
          <Text>Hey</Text>
        </View>
      );

     
}
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
    }, 
    image: {
      width: 100,
      
    }
   
});