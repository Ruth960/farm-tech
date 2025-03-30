import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function CommunityPosts() {
  
    const posts = [
        {
          id: 1,
          title: 'Best practices for growing hybrid maize varieties?',
          author: 'John Kamau',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          time: '2 hours ago',
          replies: 15,
          likes: 24,
        },
        {
          id: 2,
          title: 'Dealing with the fall armyworm infestation in my maize farm',
          author: 'Akinyi Odongo',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          time: '5 hours ago',
          replies: 8,
          likes: 12,
        },
        {
          id: 3,
          title: 'Water harvesting techniques for small-scale farmers in arid areas',
          author: 'David Kiprotich',
          avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
          time: 'Yesterday',
          replies: 32,
          likes: 47,
        },
        {
          id: 4,
          title: 'Using manure vs. inorganic fertilizers for sukuma wiki',
          author: 'Sarah Wanjiru',
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
          time: '2 days ago',
          replies: 45,
          likes: 56,
        },
        {
          id: 5,
          title: 'Tips for disease management in coffee farming',
          author: 'Robert Omondi',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
          time: '1 day ago',
          replies: 20,
          likes: 38,
        },
        {
          id: 6,
          title: 'Optimal spacing for planting potatoes in Nakuru?',
          author: 'Linda Chepkoech',
          avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
          time: '3 days ago',
          replies: 18,
          likes: 33,
        },
        {
          id: 7,
          title: 'Controlling coffee berry disease effectively',
          author: 'Michael Mwangi',
          avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
          time: '4 days ago',
          replies: 25,
          likes: 42,
        },
        {
          id: 8,
          title: 'Improving soil fertility for pyrethrum cultivation',
          author: 'Susan Moraa',
          avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
          time: '5 days ago',
          replies: 30,
          likes: 50,
        },
        {
          id: 9,
          title: 'Managing bacterial wilt in tomatoes',
          author: 'James Mutua',
          avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
          time: '6 days ago',
          replies: 22,
          likes: 40,
        },
        {
          id: 10,
          title: 'Best storage practices to prevent post-harvest losses in mangoes',
          author: 'Patricia Nzisa',
          avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
          time: '1 week ago',
          replies: 16,
          likes: 35,
        },
        {
          id: 11,
          title: 'Is drip irrigation suitable for my avocado farm in Murang\'a?',
          author: 'William Otieno',
          avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
          time: '1 week ago',
          replies: 28,
          likes: 48,
        },
        {
          id: 12,
          title: 'Benefits of intercropping maize with beans',
          author: 'Jennifer Achieng',
          avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
          time: '1 week ago',
          replies: 35,
          likes: 55,
        },
        {
          id: 13,
          title: 'Proper pruning techniques for tea bushes',
          author: 'Charles Njoroge',
          avatar: 'https://randomuser.me/api/portraits/men/93.jpg',
          time: '2 weeks ago',
          replies: 23,
          likes: 41,
        },
        {
          id: 14,
          title: 'Preventing black rot in cabbages',
          author: 'Elizabeth Waithera',
          avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
          time: '2 weeks ago',
          replies: 19,
          likes: 39,
        },
        {
          id: 15,
          title: 'Starting a kitchen garden with indigenous vegetables',
          author: 'Daniel Musyoka',
          avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
          time: '3 weeks ago',
          replies: 27,
          likes: 46,
        },
        {
          id: 16,
          title: 'Companion planting for pest control in my kale patch',
          author: 'Nancy Nekesa',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          time: '3 weeks ago',
          replies: 31,
          likes: 52,
        },
        {
          id: 17,
          title: 'Making effective compost from farm waste',
          author: 'Christopher Barasa',
          avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
          time: '4 weeks ago',
          replies: 24,
          likes: 43,
        },
        {
          id: 18,
          title: 'Growing drought-resistant crops in Turkana County',
          author: 'Dorothy Limo',
          avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
          time: '4 weeks ago',
          replies: 21,
          likes: 40,
        },
        {
          id: 19,
          title: 'Organic methods for controlling snails in my garden',
          author: 'Matthew Koech',
          avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
          time: '1 month ago',
          replies: 29,
          likes: 49,
        },
        {
          id: 20,
          title: 'Advantages of using raised beds for vegetable farming in urban areas',
          author: 'Ruth Mwikali',
          avatar: 'https://randomuser.me/api/portraits/women/59.jpg',
          time: '1 month ago',
          replies: 33,
          likes: 54,
        },
      ];

  interface Post {
    id: number;
    title: string;
    author: string;
    avatar: string;
    time: string;
    replies: number;
    likes: number;
  }

  interface CommunityCardProps {
    post: Post;
  }

  const PostCard = ({ post }: CommunityCardProps) => { // Renamed ProductCard to PostCard
    return (
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.time}>{post.time}</Text>
          </View>
        </View>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.postStats}>
          <Text><MaterialCommunityIcons name="message-outline" size={24} color="black" />
            {post.replies} replies</Text>
          <Text> <EvilIcons name="heart" size={24} color="black" />
            {post.likes} likes</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts} // Changed post to posts
        renderItem={({ item }) => <PostCard post={item} />} // Renamed ProductCard to PostCard
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postCard: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  author: {
    fontWeight: 'bold',
  },
  time: {
    color: 'gray',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'gray'
  },
});