import express from 'express';
import { indexPage, nextPage } from "../controllers";
const indexRouter = express.Router();

console.log(indexPage)
console.log(nextPage)
indexRouter.get('/', indexPage);
indexRouter.get("/", nextPage);

export default indexRouter;
