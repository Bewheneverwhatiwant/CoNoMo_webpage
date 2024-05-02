import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../Container/StyledImg';
import CustomRow from '../Container/CustomRow';

const HeaderContainer = styled.header`
position: fixed;
top: 0;
width: 100%;
z-index: 99;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;

    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const LogoButton = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
color: black;
`

export default function Header() {

    const navigate = useNavigate();

    const Back = () => {
        navigate('/');
    }

    return (

        <HeaderContainer>
            <CustomRow width='97%' justifyContent='space-between'>
                <LogoButton onClick={Back}>
                    하이 코노모~
                </LogoButton>
            </CustomRow>
        </HeaderContainer>

    );
};