import React from "react";

import {FiThumbsUp} from 'react-icons/fi';
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://s3-alpha-sig.figma.com/img/76dc/2afe/34138bf3e5fa50890ac096b57e9cd9be?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L91pLRbtXzhexhHWeVIN1mZJ9WtOvt6NNbgtab~ayemnmA5NJP34GWdfjIsMKa649AXHR04~9Dk5x0tQWCSRvpmQRlwMhzq1R7Hlmn54p9q9eqrAjNq0~7Eym8V0pqSWua6ujEL~aTOm3JLf-T3~4uh6B0qaSKJ8wFI0sh1xzwgSyofQm1zRHqqCSarcVuu2myWyc0VLvzdp7KY1msQMfEn0Sb5IJuFvP3iLBlwN7gMoW6dDdmzvRyKm3albfRVCHWiwMmgWsyd2oRMTqUYdMNs3A1Ns4djpXdEkSAbHF6yeaIMny3U2go1vR29s3F6vKmOmPqJqwkrz~dXRXdAzVA__'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/28720780?s=400&u=4bb995f0698473415291f5cc87f5163acfdc9a6c&v=4' />
                <div>
                    <h4>Alejandro</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... Ver Mais</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
};


export default Card;