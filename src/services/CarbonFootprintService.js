// CarbonFootprintService.js

class CarbonFootprintService {
    async calcularPegadaCarbono(data) {
      try {
        const response = await fetch('http://127.0.0.1:8000/calcular/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) {
          throw new Error('Erro ao calcular a pegada de carbono');
        }
  
        return await response.json();
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
  
  export default new CarbonFootprintService();
  