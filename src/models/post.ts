import { IPostInput } from "../interfaces/post";

const validatePostInput = (postInput: IPostInput): IPostInput => {
  const { name, description } = postInput;

  if (!name) {
    throw new Error("Post name is required");
  }

  if (!description) {
    throw new Error("Post description is required");
  }

  return { name, description };
};

export { validatePostInput };
