import express from 'express';
import { indexPage, nextPage } from "../controllers";
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/test', nextPage);

export default indexRouter;
