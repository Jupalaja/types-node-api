import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: Error) => {
  console.log(errorRaw);
  res.status(500).send({ message: error });
};

export { handleHttp };
