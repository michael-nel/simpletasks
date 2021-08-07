import ISecondUseCase from '@borders/usecases/ISecondUseCase';
import SecondUseCase from '@usecases/SecondUseCase';
import {
  ListOfNumbersIsEmpty,
  ExistsAlphaNumbericInList,
} from '@shared/resources';

let secondUseCase: ISecondUseCase;

describe('SecondUseCase', () => {
  beforeEach(() => {
    secondUseCase = new SecondUseCase();
  });

  it('should be error because list is empty', async () => {
    try {
      const list = [] as Array<number>;
      await secondUseCase.execute({
        list,
      });
    } catch (err) {
      expect(err.message).toBe(ListOfNumbersIsEmpty);
    }
  });

  it('should be error because list contains a alphanumeric', async () => {
    try {
      const list = [1, 'a'] as Array<any>;
      await secondUseCase.execute({
        list,
      });
    } catch (err) {
      expect(err.message).toBe(ExistsAlphaNumbericInList);
    }
  });

  it('should be result of sum at array', async () => {
    const list = [1, 2, 3] as Array<any>;
    const result = await secondUseCase.execute({
      list,
    });
    expect(result).toEqual(6);
  });

  it('should be result of sum at array with a number string', async () => {
    const list = [1, 2, '3'] as Array<any>;
    const result = await secondUseCase.execute({
      list,
    });
    expect(result).toEqual(6);
  });
});
