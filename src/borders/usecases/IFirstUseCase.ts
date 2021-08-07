import IFirstUseCaseDto from '@borders/dtos/IFirstUseCaseDto';

export default interface IFirstUseCase {
  execute(data: IFirstUseCaseDto): Promise<string>;
}
