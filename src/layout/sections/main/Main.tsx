import styled from 'styled-components';
import photo from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';

export function Main() {
  return (
    <StyledMain>
      <FlexWrapper justify='space-around' align='center'>
      <div>
        <p>Hi 👋,</p>
        <p>My name is</p>
        <Name>Mykhailo Martyshev</Name>
        <MainTitle>I am a Front-End Developer</MainTitle>
      </div>

      <Photo src={photo} alt="My photo" />
      </FlexWrapper>
    </StyledMain>
  );
}

const StyledMain = styled.section`
    min-height: 50vh;
    background-color: #6e852373;
`

const Name = styled.h3`
    
`

const MainTitle = styled.h1`
    
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    align-self: center;
`