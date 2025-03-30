//Here you can add members only
// The member should be regestered as a farmer


import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions, } from "react-native"
export default function AddCommunity(){

    
   
    return(

        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Text style={styles.iconStyle}>
                        <AntDesign name="adduser" size={28} color="white" />
                        
                    </Text>
                </TouchableOpacity>

            </View>
            <View>
                <Text style={styles.text}> New Group</Text>
            </View>
           
            
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'flex-start', 
        flexDirection: 'row',
        flex: 1, 
       
    },
    
    iconStyle: {
        backgroundColor: 'green', 
        borderRadius:'50%',
    },
    text: {
        fontSize: 16,
        fontWeight: 500,
        padding:5,
    }
   
});




