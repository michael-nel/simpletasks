import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import SecondUseCase from '@usecases/SecondUseCase';

export default class UseCaseSecondController {
  public async create(request: Request, response: Response): Promise<Response> {
    const list = request.body;

    const secondUseCase = container.resolve(SecondUseCase);

    const result = await secondUseCase.execute({
      list,
    });

    return response.json(result);
  }
}
