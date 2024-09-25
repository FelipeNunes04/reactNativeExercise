import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Post as PostEntity } from '@entities';

import styles from './PostPreFooter.styles';

type Props = {
  post: PostEntity;
};

const PostPreFooter = ({ post }: Props) => {
  return (
    <View style={styles.preFooter}>
      <View style={styles.iconContainer}>
        <Icon 
          name={post.liked ? 'heart' : 'heart-o'}
          size={24}
          color={post.liked ? 'red' : 'black'}
        />
        <Text style={styles.likes}>{post.likes}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon 
          name="comment-o"
          size={24}
          color="black"
        />
        <Text style={styles.comments}>{post.comments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon 
          name="paper-plane-o"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon 
          name={post.saved ? 'bookmark' : 'bookmark-o'}
          size={24}
          color={post.saved ? 'black' : 'gray'}
        />
      </View>
    </View>
  );
};

export default PostPreFooter;
