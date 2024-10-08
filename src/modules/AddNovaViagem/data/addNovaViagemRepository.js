const addNovaViagemRepository = (axiosInstance) => {
    // Função que adiciona uma nova viagem enviando dados para a API
    const addNovaViagem = async (dadosViagem) => {
      try {
        const response = await axiosInstance.post('/viagem', dadosViagem);
        return response.data;
      } catch (error) {
        console.error('Erro ao adicionar nova viagem: ', error);
        throw error;
      }
    };
  
    return {
      addNovaViagem, // Exporta a função para ser usada nos casos de uso
    };
  };
  
  export default addNovaViagemRepository;
  