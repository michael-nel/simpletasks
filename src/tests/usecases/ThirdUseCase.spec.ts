import IThirdUseCase from '@borders/usecases/IThirdUseCase';
import ThirdUseCase from '@usecases/ThirdUseCase';
import { ListOfObjectsIsEmpty } from '@shared/resources';

let thirdUseCase: IThirdUseCase;

describe('ThirdUseCase', () => {
  beforeEach(() => {
    thirdUseCase = new ThirdUseCase();
  });

  it('should be error because list is empty', async () => {
    try {
      const list = [] as Array<any>;
      await thirdUseCase.execute({
        list,
      });
    } catch (err) {
      expect(err.message).toBe(ListOfObjectsIsEmpty);
    }
  });

  it('should be removed element duplicate and just contain one', async () => {
    const list = ['rick', 1, 2, 'rick'] as Array<any>;
    const result = (await thirdUseCase.execute({
      list,
    })) as any[];
    expect(
      result.filter(n => {
        return n === 'rick';
      }).length,
    ).toEqual(1);
  });

  it('should be all duplicates elements', async () => {
    const list = ['rick', 1, 2, 'rick', 1, 1] as Array<any>;
    const result = (await thirdUseCase.execute({
      list,
    })) as any[];
    expect(result.length).toEqual(3);
  });
});
