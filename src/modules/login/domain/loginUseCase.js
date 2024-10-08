const loginUseCase = (repository) => async (payload) => {
    try {
      console.log(repository);
  
      const response = await repository(payload);
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  export default loginUseCase;
  