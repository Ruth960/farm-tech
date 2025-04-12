import { View, SafeAreaView, Text, StyleSheet} from 'react-native';
import Navbar from '@/components/home/Navbar';
import Topics from '@/components/communityForum/AgriTopics';
import CommunityPosts from '@/components/communityForum/CommunityPosts';

export default function Community() {

    return(
        <SafeAreaView
        style={{
            backgroundColor:'white',
            height: '100%',
            
        }}>
            <Navbar/>
            <Topics/>
            <CommunityPosts/>
        </SafeAreaView>
        
    )
}