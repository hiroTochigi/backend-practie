import express from 'express';
import {
  indexPage, messagesPage, nextPage, addMessage
} from '../controllers';
import { modifyMessage } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.get('/test', nextPage);
indexRouter.post('/messages', modifyMessage, addMessage);
export default indexRouter;
