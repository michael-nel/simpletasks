import ISecondUseCaseDto from '@borders/dtos/ISecondUseCaseDto';
import ISecondUseCase from '@borders/usecases/ISecondUseCase';
import AppError from '@shared/errors/AppError';
import validator from 'validator';
import {
  ListOfNumbersIsEmpty,
  ExistsAlphaNumbericInList,
} from '@shared/resources';

class SecondUseCase implements ISecondUseCase {
  public async execute(data: ISecondUseCaseDto): Promise<number> {
    const { list } = data;

    this.Validate(list);

    return list.reduce((a, b) => Number(a) + Number(b), 0);
  }

  private Validate(list: Array<number>) {
    if (list.length == 0) throw new AppError(ListOfNumbersIsEmpty);

    for (const value of list) {
      if (!validator.isNumeric(value.toString())) {
        throw new AppError(ExistsAlphaNumbericInList);
      }
    }
  }
}
export default SecondUseCase;
