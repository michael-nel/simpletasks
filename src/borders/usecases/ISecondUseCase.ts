import ISecondUseCaseDto from '@borders/dtos/ISecondUseCaseDto';

export default interface ISecondUseCase {
  execute(data: ISecondUseCaseDto): Promise<number>;
}
