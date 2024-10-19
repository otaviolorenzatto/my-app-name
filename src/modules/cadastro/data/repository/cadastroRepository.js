const cadastroRepository = (axios) => async (payload) => {
    try {
      console.log("repository", payload);
  
      await axios.post("/auth/registrar", payload);
    } catch (error) {
      console.log(error);
    }
  };
  
  export default cadastroRepository;