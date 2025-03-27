import{View, Text, TouchableOpacity} from 'react-native';

export default function signup(){

    return (
        <View>
            <Text>Hey</Text>
            <TouchableOpacity onPress={() => console.log('Sign up pressed')} >Sign up
            </TouchableOpacity>
            </View> 
    )
}