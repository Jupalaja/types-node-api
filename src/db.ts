import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { IPosts } from "./interfaces/post";

let db: lowdb.LowdbSync<IPosts>;

export const createConnection = () => {
  const adapter = new FileSync<IPosts>("db.json");
  db = lowdb(adapter);
  if (!db.has("posts").value()) {
    db.defaults({ posts: [] }).write();
  }
};

export const getConnection = () => db;
