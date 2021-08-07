import IFirstUseCase from '@borders/usecases/IFirstUseCase';
import FirstUseCase from '@usecases/FirstUseCase';
import { ParameterIsNotValid } from '@shared/resources';

let firstUseCase: IFirstUseCase;

describe('FirstUseCase', () => {
  beforeEach(() => {
    firstUseCase = new FirstUseCase();
  });

  it('should be error because first parameter is empty', async () => {
    try {
      await firstUseCase.execute({
        firstParam: '',
        secondParam: 'james',
      });
    } catch (err) {
      expect(err.message).toBe(ParameterIsNotValid);
    }
  });

  it('should be error because second parameter is empty', async () => {
    try {
      await firstUseCase.execute({
        firstParam: 'rick',
        secondParam: '',
      });
    } catch (err) {
      expect(err.message).toBe(ParameterIsNotValid);
    }
  });

  it('should be error because first parameter with a number', async () => {
    try {
      await firstUseCase.execute({
        firstParam: 'rick1',
        secondParam: 'james',
      });
    } catch (err) {
      expect(err.message).toBe(ParameterIsNotValid);
    }
  });

  it('should be not equal like parameters input', async () => {
    const result = await firstUseCase.execute({
      firstParam: 'rick',
      secondParam: 'james',
    });

    expect(result).not.toEqual('rick james');
  });

  it('should be Ok', async () => {
    const result = await firstUseCase.execute({
      firstParam: 'rick',
      secondParam: 'james',
    });

    expect(result).toEqual('Rick james');
  });
});
