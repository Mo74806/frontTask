import { PostDataInterface } from "@/types";
import axios from "axios";

export const PostService = {
  getPosts,
  createPost,
  updatePost,
  getSinglePost,
  deletePost,
};

async function getPosts(): Promise<PostDataInterface[]> {
  try {
    const { data } = await axios.get<PostDataInterface[]>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        maxContentLength: Infinity,
      }
    );

    return data;
  } catch (e) {
    return Promise.reject(e);
  }
}
async function getSinglePost(postId: any): Promise<PostDataInterface> {
  try {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    };

    let response = await axios(config);

    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
}
async function createPost(data: any): Promise<any> {
  try {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://jsonplaceholder.typicode.com/posts`,
      data,
    };

    let response = await axios(config);

    return response;
  } catch (e) {
    return e;
  }
}
async function updatePost(
  data: { userId: string; title: string; body: string },
  postId: string
): Promise<any> {
  try {
    var config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      data,
    };

    let response = await axios(config);

    return response;
  } catch (e) {
    return e;
  }
}
async function deletePost(postId: string): Promise<any> {
  try {
    var config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    };

    let response = await axios(config);

    return response;
  } catch (e) {
    return e;
  }
}
