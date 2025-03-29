import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import CreateCommunity  from "@/components/community/CreateNewCommunity";
import CreateGroup from "@/components/community/CreateNewgroup";

export default function Explore(){
    return(
        <SafeAreaView
        style={{
            backgroundColor:'white',
            height: '100%',
        }}
        >
            <View>
                <CreateCommunity/>
                <CreateGroup/>
            </View>
            <View>
                <Text
                style={styles.text}>
                List of members you are connected with</Text>
            </View>
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'grey',
        padding: 10,
        fontSize: 10,
        margin: 3,
        fontStyle: 'italic',
    },
});