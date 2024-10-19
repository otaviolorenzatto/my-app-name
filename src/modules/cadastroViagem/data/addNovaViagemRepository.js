const loginRepository = (axios) => async (payload) => {
    try {
  
      const response = await axios.post("/auth/viagem", payload);
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export default loginRepository;
  