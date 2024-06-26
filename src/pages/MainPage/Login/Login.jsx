import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';

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

const InputForm = styled.input`
display: flex;
border: 1.5px solid #8CC63F;
background-color: transparent;
border-radius: 15px;
width: 100%;
height: 2rem;
padding: 0.3rem;

&::placeholder {
  color: #D9D9D9;
}

&:active {
  outline: none;  // 클릭 시 기본적으로 적용되는 아웃라인 제거
}
`;

const LoginButton = styled.button`
width: 30%;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
color: white;
border: none;
border-radius: 20px;
background-color: ${props => props.isActive ? '#8CC63F' : '#D9D9D9'};
cursor: ${props => props.isActive ? 'pointer' : 'not-allowed'};
pointer-events: ${props => props.isActive ? 'auto' : 'none'};
`;

const MiniButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 0.3rem;
color: grey;
border: none;
background-color: transparent;
cursor: pointer;
text-decoration: underline;
`;

export default function Component() {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const isFormFilled = userId && password;

    const navigate = useNavigate();

    const LoginSuccess = () => {
        if (isFormFilled) { // 조건을 추가하여 아이디와 비밀번호가 모두 입력되었는지 확인
            alert('로그인 완료되었습니다.');
            navigate('/');
        }
    }

    const MoveSignup = () => {
        navigate('/signuppage');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' justifyContent='center' alignItems='center' gap='5rem'>

                    <CustomColumn width='100%' justifyContent='center' alignItems='center' gap='2rem'>
                        <CustomColumn width='30%' justifyContent='center' alignItems='flex-start' gap='1rem'>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>아이디</CustomFont>
                            <InputForm placeholder='아이디를 입력하세요.' value={userId} onChange={e => setUserId(e.target.value)} />
                        </CustomColumn>

                        <CustomColumn width='30%' justifyContent='center' alignItems='flex-start' gap='1rem'>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>비밀번호</CustomFont>
                            <InputForm placeholder='비밀번호를 입력하세요.' value={password} onChange={e => setPassword(e.target.value)} />
                        </CustomColumn>

                        <LoginButton isActive={isFormFilled} onClick={LoginSuccess}>
                            <CustomFont font='1rem' color='white' fontWeight='bold'>로그인 하기</CustomFont>
                        </LoginButton>

                        <CustomRow width='50%' justifyContent='center' alignItems='space-around' gap='5rem'>
                            <MiniButton>아이디 찾기</MiniButton>
                            <MiniButton>비밀번호 찾기</MiniButton>
                            <MiniButton onClick={MoveSignup}>회원가입</MiniButton>
                        </CustomRow>
                    </CustomColumn>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};