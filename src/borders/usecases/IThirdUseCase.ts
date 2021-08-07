import IThirdUseCaseDto from '@borders/dtos/IThirdUseCaseDto';

export default interface IThirdUseCase {
  execute(data: IThirdUseCaseDto): Promise<object>;
}
