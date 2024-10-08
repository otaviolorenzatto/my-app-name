import addNovaViagemUseCase from "../domain/addNovaViagemUseCase";
import addNovaViagemRepository from "../data/addNovaViagemRepository";
import addNovaViagemController from "../controller/addNovaViagemController";
import axiosInstance from "./axios";

const addNovaViagemRepositoryImpl = addNovaViagemRepository(axiosInstance);
const addNovaViagemUseCaseImpl = addNovaViagemUseCase(addNovaViagemRepositoryImpl);

export const addNovaViagemControllerImpl = addNovaViagemController(addNovaViagemUseCaseImpl);
