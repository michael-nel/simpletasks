import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import UseCaseOneController from '../controllers/UseCaseFirstController';

const useCaseOneRouter = Router();

const useCaseOneController = new UseCaseOneController();

useCaseOneRouter.post(
  '/:firstParam/:secondParam',
  celebrate({
    [Segments.PARAMS]: {
      firstParam: Joi.string().required(),
      secondParam: Joi.string().required(),
    },
  }),
  useCaseOneController.create,
);

export default useCaseOneRouter;
