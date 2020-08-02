import express from 'express';
import { indexPage, messagesPage, nextPage } from '../controllers';

const indexRouter = express.Router();

console.log(indexPage)
console.log(messagesPage)
indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage)
indexRouter.get('/test', nextPage);
export default indexRouter;
