import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import UseCaseSecondController from '../controllers/UseCaseSecondController';

const useCaseSecondRouter = Router();

const useCaseSecondController = new UseCaseSecondController();

useCaseSecondRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.array().items(Joi.number()).required(),
  }),
  useCaseSecondController.create,
);

export default useCaseSecondRouter;
