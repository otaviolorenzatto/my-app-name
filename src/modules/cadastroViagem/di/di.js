import cadastroViagemController from "../controller/cadastroViagemController";
import addNovaViagemRepository from "../data/addNovaViagemRepository";
import addNovaViagemUseCase from "../domain/addNovaViagemUseCase";
import axiosInstance from "./axios";

const addNovaViagemRepositoryImpl = addNovaViagemRepository(axiosInstance);

const addNovaViagemUseCaseImpl = addNovaViagemUseCase(addNovaViagemRepositoryImpl);

const cadastroViagemControllerImpl = cadastroViagemController(addNovaViagemUseCaseImpl);

export { cadastroViagemControllerImpl };
