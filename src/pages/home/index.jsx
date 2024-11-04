import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Buttons';
import Header from '../../components/Header';
import { Container, Title, TitleHighlight, TextContent } from './styles';
import bannerImg from '../../assets/banner.svg';

const Home = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login');
    }   

  return (
    <>
        <Header/>
        <Container>
            <div>
                <Title> 
                <TitleHighlight>
                    Implemente<br/>
                </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo 
                    desafio profissional, evoluindo em comunidade com os melhores experts.<br/>
                </TextContent>
                <Button title={"Começar agora"} variant='secondary' onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImg} alt='Imagem principal'/>
            </div>
         
        </Container>

    </>
  )
}

export default Home;