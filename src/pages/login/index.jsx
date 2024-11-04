import {MdEmail, MdLock} from 'react-icons/md';
import React from "react";
import { useNavigate } from 'react-router';
import Button from "../../components/Buttons";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {
  Container,
  Wrapper,
  Column,
  Row,
  Title,
  TitleLogin,
  SubTitleLogin,
  ForgotText,
  CreateText,
} from "./styles";

const Login = () => {

  const navigate = useNavigate();
  const handleClickSignIn = () => {
      navigate('/feed');
  }   


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form>
            <Input placeholder="Email" leftIcon={<MdEmail />}/>
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
            <Button title={"Entrar"} variant="secondary" type="button" onClick={handleClickSignIn}/>
            </form>
            <Row>
                <ForgotText>Esqueci minha senha</ForgotText>
                <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
          
        </Column>
      </Container>
    </>
  );
};

export default Login;
