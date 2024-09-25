import { Image, View } from 'react-native';

import { Post as PostEntity } from '@entities';

import PostFooter from '../PostFooter/PostFooter';
import Header from '../PostHeader/PostHeader';
import PostPreFooter from '../PostPreFooter/PostPreFooter';
import styles from './Post.styles';

type Props = {
  post: PostEntity;
};

const Post = ({ post }: Props) => {
  return (
    <View style={styles.postContainer}>
      <Header post={post}/>

      <Image source={{ uri: post.image }} style={styles.postImage} />

      <PostPreFooter post={post} />
      
      <PostFooter post={post} /> 
    </View>
  );
};

export default Post;
