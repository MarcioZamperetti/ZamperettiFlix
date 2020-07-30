import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'

function CadastroCategoria() {
    const [categoria, setCategorias] = useState([]);
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }
    const [valores, setValores] = useState(valoresIniciais);

    function setValor(nome, valor) {
        setValores({
            ...valores,
            [nome]: valor
        })
    }

    function handleChange(infoEvento) {
        setValor(
            infoEvento.target.getAttribute('name'),
            infoEvento.target.value
        );
    }

    useEffect(() => {
        if(window.location.href.includes('localhost')) {
          const URL = 'https://localhost:3000/categorias'; 
          fetch(URL)
           .then(async (respostaDoServer) =>{
               console.log(respostaDoServer);
            if(respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return; 
            }
            throw new Error('Não foi possível pegar os dados');
           })
        }    
      }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={function handleSubmit(infoEvento) {
                infoEvento.preventDefault();
                setCategorias([
                    ...categoria,
                    valores
                ])
            }}>
                <FormField
                    label="Nome da Categoria2"
                    value={valores.nome}
                    name="nome"
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
                    {categoria.nome}
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