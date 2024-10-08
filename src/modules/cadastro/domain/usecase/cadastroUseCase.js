const cadastroUseCase = (repository) => async (payload) => {
  try {
    console.log(repository);

    return await repository(payload);
  } catch (error) {
    throw error;
  }
};

export default cadastroUseCase;
