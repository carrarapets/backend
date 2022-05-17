import {Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';

const router = Router();
//-- rota users
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailsUserController().handle)

router.put('/edit', isAuthenticated, new UpdateUserController().handle)

router.delete('/delete', isAuthenticated, new DeleteUserController().handle)


export { router };