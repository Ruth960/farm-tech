// Here you can add groups, members
// If you add an individual member, they should be regestered as a farmer
import AntDesign from '@expo/vector-icons/AntDesign';

import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions, } from "react-native"
export default function AddCommunity(){

    
   
    return(

        <SafeAreaView >
            <View style={styles.container}>
                <View>
                    <Text style={styles.iconStyle}>
                        <AntDesign name="arrowleft" size={28} color="black" /></Text>

                </View>
                <View>
                    <Text style={styles.text}
                    >
                        Select to add</Text>
                </View>
            </View>
           
           

           
            <View style={styles.container}>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.iconStyle}>
                            <Text><AntDesign name="addusergroup" size={28} color="white" /></Text>
                        </Text>
                    </TouchableOpacity>

            
                </View>
            <View>
                <Text style={styles.text}> New Community</Text>
            </View>
            </View>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: 'white',
        alignItems: 'flex-start', 
        flex: 1, 
       flexDirection:'row',
    },
   
    iconStyle: {
        backgroundColor: 'green',  
        borderRadius:'50%',
    }, 
    text: {
        fontSize:16,
        fontWeight: 500,
        padding: 5,

    }
});




