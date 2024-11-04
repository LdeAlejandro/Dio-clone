import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={90}
            name="Alejandro Garcia"
            image="https://avatars.githubusercontent.com/u/28720780?s=400&u=4bb995f0698473415291f5cc87f5163acfdc9a6c&v=4"
          />
          <UserInfo
            percentual={75}
            name="Alejandro Garcia"
            image="https://avatars.githubusercontent.com/u/28720780?s=400&u=4bb995f0698473415291f5cc87f5163acfdc9a6c&v=4"
          />
          <UserInfo
            percentual={60}
            name="Alejandro Garcia"
            image="https://avatars.githubusercontent.com/u/28720780?s=400&u=4bb995f0698473415291f5cc87f5163acfdc9a6c&v=4"
          />
          <UserInfo
            percentual={50}
            name="Alejandro Garcia"
            image="https://avatars.githubusercontent.com/u/28720780?s=400&u=4bb995f0698473415291f5cc87f5163acfdc9a6c&v=4"
          />
          <UserInfo
            percentual={25}
            name="Alejandro Garcia"
            image="https://avatars.githubusercontent.com/u/28720780?s=400&u=4bb995f0698473415291f5cc87f5163acfdc9a6c&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
