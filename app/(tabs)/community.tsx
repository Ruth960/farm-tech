import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Navbar from '@/components/communityForum/Navbar';
import Topics from '@/components/communityForum/AgriTopics';
import CommunityPosts from '@/components/communityForum/CommunityPosts';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';
import CreatePost from '@/components/communityForum/CreatePost';

export default function Community() {
    const [showCreatePost, setShowCreatePost] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: 'white',
                    flex: 1,
                }}>
                <Navbar />
                <Topics />
                {showCreatePost ? (
                    <View style={{ flex: 1 }}>
                       
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => setShowCreatePost(false)}
                        >
                            <FontAwesome6 name="arrow-left" size={24} color="green" />
                        </TouchableOpacity>
                        <CreatePost />
                    </View>
                ) : (
                    <CommunityPosts />
                )}
            </View>
            {!showCreatePost && (
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={0.8}
                    onPress={() => {
                        setShowCreatePost(true);
                    }}
                >
                    <FontAwesome6 name="add" size={34} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 24,
        bottom: 32,
        backgroundColor: '#22c55e',
        borderRadius: 32,
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    backButton: {
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#f3f4f6',
    },
});