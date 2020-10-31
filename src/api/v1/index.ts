import { Router } from 'express';
import StatusRoute from './routes/status.route';
import UsersRoute from './routes/users.route';
import UserValidator from './validators/user.validator';
import { error } from './middlewares/error.middleware';

const v1 = Router();

v1.get('/status', StatusRoute.getStatus);

// Users route
v1.get('/users', UsersRoute.getUsersList);
v1.get('/users/:id', UsersRoute.getUser);
v1.post('/users', UserValidator.validatePostUser, UsersRoute.postUser);

v1.use(error);

export default v1;
