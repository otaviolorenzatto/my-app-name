const loginRepository = (axios) => async (payload) => {
    try {
      console.log("repository", payload);
  
      const response = await axios.post("/auth/login", payload);
  
      return response.data;
    } catch (error) {
      console.log("Erro no loginRepository:", error);
      throw error;
    }
  };
  
  export default loginRepository;
  