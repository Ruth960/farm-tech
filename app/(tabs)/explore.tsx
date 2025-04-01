
import Navbar from '@/components/home/Navbar';
import ProfileHead from '@/components/profile/ProfileHead';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';


export default function Explore(){
    return(
        <SafeAreaView style={styles.container}>
            
            <ProfileHead />
        </SafeAreaView>
            
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white', 
    },
    text: {
        color: 'grey',
        padding: 10,
        fontSize: 10,
        margin: 3,
        fontStyle: 'italic',
    },
});
