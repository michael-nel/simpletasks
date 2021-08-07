import { Router } from 'express';

import useCaseFirst from './usecase-first.routes';
import useCaseSecond from './usecase-second.routes';
import useCaseThird from './usecase-third.routes';

const routes = Router();

routes.use('/v1/usecase1', useCaseFirst);
routes.use('/v1/usecase2', useCaseSecond);
routes.use('/v1/usecase3', useCaseThird);

export default routes;
