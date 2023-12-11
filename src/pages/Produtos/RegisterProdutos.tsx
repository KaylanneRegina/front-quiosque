import React, { useState } from 'react';
import { ProdutosServices } from '../services/ProdutosServices';

export default function RegisterPost() {
    const [nome_produto, setNome_produto] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [valor, setValor] = useState<number>();

    const onSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await ProdutosServices.savePost({
            "nome_produto": nome_produto,
            "descricao": descricao,
            "valor": valor
        })
        const STATUS_CREATED = 201
        if(result == STATUS_CREATED) {
            alert('Criado com sucesso!');
        }
    };

    return (
        <>
            <h1>Cadastrar Post</h1>
            <form onSubmit={onSave}>
                <div>
                    <label htmlFor="title">Nome do produto:</label>
                    <input
                        className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        value={nome_produto}
                        onChange={(e) => setNome_produto(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Descriçaõ:</label>
                    <input
                        className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="valor">Valor:</label>
                    <input
                        className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="valor"
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </div>
                <input type="submit" value="Salvar" />
            </form>
        </>
    );

}