import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ThirdUseCase from '@usecases/ThirdUseCase';

export default class UseCaseThirdController {
  public async create(request: Request, response: Response): Promise<Response> {
    const list = request.body;

    const thirdUseCase = container.resolve(ThirdUseCase);

    let result = await thirdUseCase.execute({
      list,
    });

    return response.json(result);
  }
}
