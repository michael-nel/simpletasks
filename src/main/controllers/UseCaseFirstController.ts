import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FirstUseCase from '@usecases/FirstUseCase';

export default class UseCaseFirstController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { firstParam, secondParam } = request.params;

    const firstUseCase = container.resolve(FirstUseCase);

    const result = await firstUseCase.execute({
      firstParam,
      secondParam,
    });

    return response.json(result);
  }
}
