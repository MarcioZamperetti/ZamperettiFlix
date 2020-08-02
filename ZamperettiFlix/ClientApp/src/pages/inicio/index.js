import React, { Component } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

class Inicio extends Component {
    static displayName = Inicio.name;

    constructor(props) {
        super(props);
        this.state = { categorias: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(categorias) {
        return (
            <>
                <BannerMain
                    videoTitle={categorias.categorias[0].videos[0].titulo}
                    url={categorias.categorias[0].videos[0].url}
                    videoDescription="O recado é muito simples: não existe bala de prata. Agilidade não são processos, metodologias, nem a miríade de numerologia e astrologia que assola este mercado. É hora de recuperar um pouco da essência original do mundo da Agilidade."
                />
                <Carousel
                    ignoreFirstVideo
                    category={categorias.categorias[0]}
                />
                <Carousel
                    category={categorias.categorias[1]}
                />
                <Carousel
                    category={categorias.categorias[2]}
                />
                <Carousel
                    category={categorias.categorias[3]}
                />
                <Carousel
                    category={categorias.categorias[4]}
                />
            </>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Inicio.renderForecastsTable(this.state.categorias);

        return (
            <PageDefault>
            <div>
                <p>Carregamento via json.</p>
                {contents}
            </div>
            </PageDefault>
        );
    }

    async populateWeatherData() {
        const response = await fetch('categorias');
        const data = await response.json();
        this.setState({ categorias: data, loading: false });
    }
}

export default Inicio;
