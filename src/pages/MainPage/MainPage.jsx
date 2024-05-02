import React, { useState } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../Components/Container/CustomColumn';
import CustomRow from '../../Components/Container/CustomRow';
import CustomFont from '../../Components/Container/CustomFont';
import { useNavigate } from 'react-router-dom';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 20px;
  position: relative;
  background-color: white;
`;

const Button = styled.button`
width: 30%;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
color: white;
border: none;
border-radius: 20px;
background-color: #8CC63F;
cursor: pointer;
`;


export default function Component() {

  const navigate = useNavigate();

  const MoveSignup = () => {
    navigate('/signuppage');
  }

  const MoveLogin = () => {
    navigate('/loginpage');
  }

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='100%' justifyContent='center' alignItems='center' gap='5rem'>

          <Button onClick={MoveLogin}>로그인</Button>
          <Button onClick={MoveSignup}>회원가입</Button>
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};