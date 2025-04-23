import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import Social from "../../components/social/Social";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import Menu from "../../components/menu/Menu";

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between">
          <div>
            <Logo />
          </div>
          <SocialContainer>
            <Phone>+91 12345 09876</Phone>
            <Email>sapognikmisha@gmail.com</Email>
            <Social />
          </SocialContainer>
        </FlexWrapper>

        <Line />

        <FlexWrapper justify="space-between">
          <Menu />
          <p>Designed and built by Pavan MG with Love & Coffee</p>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.section`
  min-height: 30vh;
  background-color: #37c8d3;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 0.5;
`;

const Phone = styled.a``;

const Email = styled.a``;

const Line = styled.div`
  height: 2px;
  background-color: #141313;
  width: 100%;
  margin: 20px 0;
`;
