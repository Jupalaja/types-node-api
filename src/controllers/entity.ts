import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getEntities = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, e as string);
  }
};

const getEntity = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, e as string);
  }
};

const createEntity = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send(req.body);
  } catch (e) {
    handleHttp(res, e as string);
  }
};

const updateEntity = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, e as string);
  }
};

const deleteEntity = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, e as string);
  }
};

export { getEntity, getEntities, createEntity, updateEntity, deleteEntity };
