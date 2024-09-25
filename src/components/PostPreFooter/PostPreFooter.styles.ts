import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  preFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  comments: {
    fontSize: 14,
  },
});

export default styles;
