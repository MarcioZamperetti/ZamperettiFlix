import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
    return (
        <div style={{ background: "#141414" }}>
            <Menu />

            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"O recado � muito simples: n�o existe bala de prata. Agilidade n�o s�o processos, metodologias, nem a mir�ade de numerologia e astrologia que assola este mercado. � hora de recuperar um pouco da ess�ncia original do mundo da Agilidade."}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel
                category={dadosIniciais.categorias[1]}
            />

            <Carousel
                category={dadosIniciais.categorias[2]}
            />

            <Carousel
                category={dadosIniciais.categorias[3]}
            />

            <Carousel
                category={dadosIniciais.categorias[4]}
            />

            <Footer />
        </div>
    );
}

export default Home;
