import loginController from "../controller/loginController";
import loginRepository from "../data/repository/loginRepository";
import loginUseCase from "../domain/loginUseCase";
import axiosInstance from "./axios";

const loginRepositoryImpl = loginRepository(axiosInstance);
console.log(loginRepositoryImpl, "repoimpl");

const loginUseCaseImpl = loginUseCase(loginRepositoryImpl);
console.log(loginUseCaseImpl, "useimpl");

export const loginControllerImpl = loginController(loginUseCaseImpl);
