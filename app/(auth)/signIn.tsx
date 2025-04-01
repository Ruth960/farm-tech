import {View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import {useState} from 'react';
import {useRouter} from 'expo-router';

export default function SignUp(){

     const router = useRouter();
      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [loading, setLoading] = useState (false);

       const handleSignUp = async () => {
          setLoading (true);
      
          setTimeout (() => {
            setLoading (false);
            router.push('/(auth)/signIn');
          }, 2000);
        };

    return(  
        <View style={{
            justifyContent: 'center',
            alignItems:'center',
        }}>
             <View style={{
            backgroundColor:'rgb(238, 241, 245)',
            flexDirection:'column', 
            alignItems:'center',
           
            margin:10,
            width: 350,
            borderRadius:20,
            padding:20,
            elevation: 20,
            

        }}
        >
            <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                color:'blue',
                padding: 10
            }}>
                Sign In</Text>
        
           
            <TextInput 
            placeholder='Email'
            autoCapitalize='none'
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            />
            <TextInput
            placeholder='Password'
            secureTextEntry
            style={styles.input}
            />
            
            <TouchableOpacity style={{
                backgroundColor:'rgb(12, 12, 138)',
                borderRadius: 25,
                padding: 10,
                width:150,
                margin:10,}}
                onPress={handleSignUp} disabled={loading}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                 <Text style={{
                    color:'white',
                    fontSize:24,
                    fontWeight:'bold',
                    textAlign:'center',
                }}
                >sign in</Text >
                )}
                </TouchableOpacity>
                <Text>
                    Already have an account? 
                    <Text style={{
                        color:'rgb(12, 12, 138)',
                         fontStyle:'italic',
                          fontWeight:'bold',
                        }}
                        onPress={() => router.push('/(auth)/register')}
                          >Sign up</Text>
                </Text>

         </View>
        </View>
       
      

    )
}
const styles= StyleSheet.create({

    input: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 10,
        width: 300,
    }
})