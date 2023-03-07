interface IPost {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

interface IPostInput {
  name: string;
  description: string;
}

interface IPostUpdateInput {
  name?: string;
  description?: string;
}

interface IPosts {
  posts: IPost[];
}

export { IPost, IPostInput, IPostUpdateInput, IPosts };
