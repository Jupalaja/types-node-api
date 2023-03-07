import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { IPosts } from "./interfaces/post";

let db: lowdb.LowdbSync<IPosts>;

const createConnection = () => {
  const adapter = new FileSync<IPosts>("db.json");
  db = lowdb(adapter);
  if (!db.has("posts").value()) {
    db.defaults({ posts: [] }).write();
  }
};

const getConnection = () => db;

export { createConnection, getConnection };
