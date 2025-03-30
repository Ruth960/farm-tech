import { SafeAreaView, Text} from "react-native";
import Hero  from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";

export default function Procucts(){
    return (
        <SafeAreaView 
        style={{
            backgroundColor:'white',
            height: '100%',
            
        }}>
            <Navbar/>
        </SafeAreaView>
    )
}