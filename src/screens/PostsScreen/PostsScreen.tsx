import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import { Post } from '@components';
import { Post as PostEntity } from '@components';
import { postsService } from '@services';

import styles from './PostsScreen.styles';

const PostsScreen = () => {
  const [posts, setPosts] = useState<Array<PostEntity>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postsService.getPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
        <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post post={item} />
        )}
      />
    </View>
  );
};

export default PostsScreen;
