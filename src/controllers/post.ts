import { Handler, Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { IPostInput, IPostUpdateInput } from "../interfaces/post";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../services/post";

const list: Handler = (_: Request, res: Response) => {
  try {
    const response = getPosts();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_POSTS");
  }
};

const get: Handler = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = getPost(id);
    if (!response) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_POST");
  }
};

const create: Handler = (req: Request, res: Response) => {
  try {
    const postInput: IPostInput = req.body;
    const response = createPost(postInput);
    res.status(201).json(response);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_POST", e as Error);
  }
};

const update: Handler = (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const postUpdateInput: IPostUpdateInput = req.body;
    const post = updatePost(id, postUpdateInput);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.send(post);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_POST");
  }
};

const remove: Handler = (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const post = deletePost(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.send(post);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_POST");
  }
};

export { get, list, create, update, remove };
