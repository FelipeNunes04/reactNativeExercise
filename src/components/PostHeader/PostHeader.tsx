import { View, Text, Image } from 'react-native';

import { Post as PostEntity } from '@entities';

import styles from './PostHeader.styles';

type Props = {
  post: PostEntity;
};

const Post = ({ post }: Props) => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: post.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{post.name}</Text>
    </View>
  );
};

export default Post;
