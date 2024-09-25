import { View, Text } from 'react-native';

import { Post as PostEntity } from '@entities';

import styles from './PostFooter.styles';

type Props = {
  post: PostEntity;
};

const PostFooter = ({ post }: Props) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerName}>{post.name}</Text>
      <Text style={styles.description}>{post.description}</Text>
      <Text style={styles.createdAt}>{new Date(post.createdAt).toLocaleString()}</Text>
    </View>
  );
};

export default PostFooter;
