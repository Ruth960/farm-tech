
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default function AddItems(){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconStyle}>
              
                <FontAwesome6 name="add" size={32} color="white" />
            
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexWrap: 'wrap-reverse',
        flexDirection: 'row',
        direction:'inherit',
        margin: 10,
        right: 20,


    },
    iconStyle: {
        backgroundColor: 'green',
        padding: 12,
        alignItems: 'center',
        width: 60, 
        height: 60, 
        borderRadius: 5, 
        position: 'absolute',
    }
})