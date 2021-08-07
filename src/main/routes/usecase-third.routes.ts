import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import UseCaseThirdController from '../controllers/UseCaseThirdController';

const useCaseThirdRouter = Router();

const useCaseThirdController = new UseCaseThirdController();

useCaseThirdRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.array().items(Joi.number(), Joi.string()).required(),
  }),
  useCaseThirdController.create,
);

export default useCaseThirdRouter;
