import {api} from '../axiosConfig';
import Produtos from '../entities/Produtos';

export const ProdutostService = {
    listProdutos: async () => {
        const response = await api.get('/posts/');
        return response;
    },
    saveProdutos: async (data: Produtos) => {
        const response = await api.post('/produtos/', data);
        return response.status;
    }
}