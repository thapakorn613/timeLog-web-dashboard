import axios from "axios";

const url = "http://localhost:5000/api/posts/";

class PostService {

  // ? Get Post
  static async getPosts() {
    const res = await axios.get(url);
    try {
      const data = res.data;
      return data.map(
        (post) => ({
          ...post,
          createdAt: new Date(post.createdAt),
        }),
        await fetch(data)
      );
    } catch (err) {
      return err;
    }
  }
  // ? create Post
  static insertPost(text) {
    return axios.post(url, { text });
  }

  // ? Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
