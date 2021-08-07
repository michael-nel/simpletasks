import IFirstUseCaseDto from '@borders/dtos/IFirstUseCaseDto';
import IFirstUseCase from '@borders/usecases/IFirstUseCase';
import validator from 'validator';
import AppError from '@shared/errors/AppError';
import '@borders/extensions/string';
import { ParameterIsNotValid } from '@shared/resources';

class FirstUseCase implements IFirstUseCase {
  public async execute(data: IFirstUseCaseDto): Promise<string> {
    const { firstParam, secondParam } = data;

    this.Validate(firstParam);

    this.Validate(secondParam);

    return this.ConcatFirstParamAndSecondParam(firstParam, secondParam);
  }

  private ConcatFirstParamAndSecondParam(
    firstParam: string,
    secondParam: string,
  ): string {
    return firstParam.ToCapitalize().concat(' ', secondParam.toLowerCase());
  }

  private Validate(value: string) {
    if (!validator.isAlpha(value) || validator.isEmpty(value))
      throw new AppError(ParameterIsNotValid);
  }
}
export default FirstUseCase;
