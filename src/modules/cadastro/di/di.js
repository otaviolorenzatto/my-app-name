import cadastroController from "../controller/cadastroController";

import cadastroRepository from "../data/repository/cadastroRepository";
import cadastroUseCase from "../domain/usecase/cadastroUseCase";

import axiosInstance from "./axios";

const cadastroRepositoryImpl = cadastroRepository(axiosInstance);
console.log(cadastroRepositoryImpl, "repoimpl");

const cadastroUseCaseImpl = cadastroUseCase(cadastroRepositoryImpl);
console.log(cadastroUseCaseImpl, "useimpl");

export const cadastroControllerImpl = cadastroController(cadastroUseCaseImpl);
