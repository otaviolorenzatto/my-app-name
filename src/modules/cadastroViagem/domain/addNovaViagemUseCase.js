const addNovaViagemUseCase = (repository) => async (payload) => {
  try {

    const response = await repository(payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export default addNovaViagemUseCase;
