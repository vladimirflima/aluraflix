import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function App() {
  return (
    <AppWrapper>
      <Menu/> 

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript"}
      /> 

      <Carousel
        IgnoreFirstVideo
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

      <Carousel
         category={dadosIniciais.categorias[5]}
      />
      
      <Footer      />
     </AppWrapper>
  );
}

export default App;
