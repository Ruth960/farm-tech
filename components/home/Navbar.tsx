import {View, Text, StyleSheet, ScrollView, Animated, Dimensions, TouchableOpacity} from 'react-native';
export default function Navbar (){

    

    return(
        
        <View style={{
            backgroundColor: 'green',
            width: '100%',
            height: 70,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
             }}>
            <View>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                
            }}>
                Farm Connect
            </Text>
            </View>
            <View>
            <Text style={{
                
                fontSize: 24,
                fontWeight: 'bold',
            }}>
                Register
            </Text>
            </View>
        </View>
            
        
    )
}