const addNovaViagemUseCase = (addNovaViagemRepository) => {
    // Função que lida com a lógica de adicionar uma nova viagem
    const execute = async (dadosViagem) => {
      try {
        // Chama o repositório para salvar a nova viagem
        const response = await addNovaViagemRepository.addNovaViagem(dadosViagem);
        return response;
      } catch (error) {
        // Tratamento de erro
        console.error("Erro no caso de uso ao adicionar nova viagem: ", error);
        throw error;
      }
    };
  
    return {
      execute, // Expõe a função 'execute' para ser utilizada em outras partes da aplicação
    };
  };
  
  export default addNovaViagemUseCase;
  