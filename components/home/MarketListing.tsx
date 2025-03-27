import { View, Text, Image, StyleSheet } from "react-native";

export default function MarketListing(){

    return (
        <View style={styles.container}>
          <Image 
            source={require('@/assets/images/partial-react-logo.png')} 
            style={[styles.image, styles.smallImage]}
          />
          <Image 
            source={require('@/assets/images/partial-react-logo.png')} 
            style={[styles.image, styles.largeImage]}
          />
        </View>
      );

     
}
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    image: {
        aspectRatio: 1,
        marginBottom: 10,
    },
    smallImage: {
        width: '20%',
    },
    largeImage: {
        width: '48%',
    },
});