import { styled } from 'styled-components';
import CustomColumn from '../Container/CustomColumn';

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
height: 10vh;
background-color: #575757;
color: white;
gap: 10px;
`;

const Detail = styled.a`
font-size: 10px;
font-family: 'RIDIBatang';
color: white;
`;

export default function Component() {
    return (
        <FooterContainer>
            <CustomColumn width='100%' alignItems='center' gap='0.6rem'>
                <Detail>(주)코딩하는 노예들의 모임</Detail>
            </CustomColumn>
        </FooterContainer>
    );
};