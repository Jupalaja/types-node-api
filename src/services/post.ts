import { getConnection } from "../db";
import { nanoid } from "nanoid";
import { IPost, IPostInput, IPostUpdateInput } from "../interfaces/post";
import { validatePostInput } from "../models/post";

const getPosts = (): IPost[] => {
  const response = getConnection().get("posts").value();
  return response;
};

const getPost = (id: string) => {
  const response = getConnection().get("posts").find({ id }).value();
  return response;
};

const createPost = (postInput: IPostInput): IPost => {
  const validatedPostInput = validatePostInput(postInput);
  const post: IPost = {
    id: nanoid(),
    ...validatedPostInput,
    createdAt: new Date(Date.now()).toISOString(),
  };
  getConnection().get("posts").push(post).write();
  return post;
};

const updatePost = (id: string, postUpdateInput: IPostUpdateInput) => {
  const updatedPost = getConnection()
    .get("posts")
    .find({ id })
    .assign(postUpdateInput)
    .write();
  return updatedPost;
};

const deletePost = (id: string) => {
  const response = getConnection().get("posts").remove({ id }).write();
  return response;
};

export { getPosts, getPost, createPost, updatePost, deletePost };
