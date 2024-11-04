import React from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture,
} from "./styles";
import logo from "../../assets/logo-dio.svg";
import Button from "../Buttons";
const Header = ({autenticado}) => {

  const navigate = useNavigate();
  const handleClickSignIn = () => {
      navigate('/feed');
  } 

  return (
    <Wrapper>
      <Container>
        <Row>
            <img  src={logo} alt="Logo da dio"/>
            {autenticado ? (<>
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
          </>) : null}
        </Row>

        <Row>
          {autenticado ? (<UserPicture src="https://avatars.githubusercontent.com/u/28720780?s=400&u=4bb995f0698473415291f5cc87f5163acfdc9a6c&v=4" alt=""/>) : (<>
          <MenuRight href="#">Home</MenuRight>
          <Button title={"Entrar"}  onClick={handleClickSignIn}/>
          <Button title={"Cadastrar"} onClick={handleClickSignIn} />
          </>)}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
