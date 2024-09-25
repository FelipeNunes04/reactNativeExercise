import axios from 'axios';

const BASE_URL = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1';

const postsService = {
  getPosts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },
};

export default postsService;
