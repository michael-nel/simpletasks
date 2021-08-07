import { container } from 'tsyringe';

import IFirstUseCase from '@borders/usecases/IFirstUseCase';
import FirstUseCase from '@usecases/FirstUseCase';

import ISecondUseCase from '@borders/usecases/ISecondUseCase';
import SecondUseCase from '@usecases/SecondUseCase';

import IThirdUseCase from '@borders/usecases/IThirdUseCase';
import ThirdUseCase from '@usecases/ThirdUseCase';

container.registerSingleton<IFirstUseCase>('FirstUseCase', FirstUseCase);

container.registerSingleton<ISecondUseCase>('SecondUseCase', SecondUseCase);

container.registerSingleton<IThirdUseCase>('ThirdUseCase', ThirdUseCase);
