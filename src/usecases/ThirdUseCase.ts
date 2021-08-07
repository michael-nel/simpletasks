import IThirdUseCaseDto from '@borders/dtos/IThirdUseCaseDto';
import IThirdUseCase from '@borders/usecases/IThirdUseCase';
import AppError from '@shared/errors/AppError';
import { ListOfObjectsIsEmpty } from '@shared/resources';

class ThirdUseCase implements IThirdUseCase {
  public async execute(data: IThirdUseCaseDto): Promise<any> {
    const { list } = data;

    this.Validate(list);

    return list.filter((value, index) => {
      return list.indexOf(value) === index;
    });
  }

  private Validate(list: Array<string | number>) {
    if (list.length == 0) throw new AppError(ListOfObjectsIsEmpty);
  }
}
export default ThirdUseCase;
