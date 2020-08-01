import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'





function CadastroCategoria() {

    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: ''
    };

    const { handleChange, valores, clearForm } = useForm(valoresIniciais);
    const [categoria, setCategorias] = useState([]);


    useEffect(() => {
        if (window.location.href.includes('localhost')) {
            const URL = 'http://localhost:8080/categorias';
            fetch(URL)
                .then(async (respostaDoServer) => {
                    if (respostaDoServer.ok) {
                        const resposta = await respostaDoServer.json();
                        setCategorias(resposta);
                        return;
                    }
                    throw new Error('Não foi possível pegar os dados');
                });
        }
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.titulo}</h1>

            <form onSubmit={function handleSubmit(infoEvento) {
                infoEvento.preventDefault();
                setCategorias([
                    ...categoria,
                    valores
                ]);
                clearForm();
            }}>
                <FormField
                    label="Titulo da Categoria"
                    value={valores.titulo}
                    name="titulo"
                    type="text"
                    onChange={handleChange}
                />
                <FormField
                    label="Nome da Descerição"
                    value={valores.descricao}
                    name="descricao"
                    type="text"
                    onChange={handleChange}
                />
                <FormField
                    label="Cor"
                    value={valores.color}
                    name="cor"
                    type="color"
                    onChange={handleChange}
                />
                <Button>
                    Cadastrar
                 </Button>
            </form>

            <ul>
                {categoria.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.titulo}
                        </li>
                    )

                })}
            </ul>


            <Link to="/">
                ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;