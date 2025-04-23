import styled from "styled-components";
import { Work } from "../../../components/work/Work";
import project1 from '../../../assets/images/project1.webp';
import project2 from '../../../assets/images/project2.webp';
import project3 from '../../../assets/images/project3.webp';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export function Works() {
  return (
    <StyledWorks>
      <Container>
      <h2>Projects</h2>
      <p>Things I’ve built so far</p>

      <FlexWrapper justify="space-around" wrap="wrap">
        <Work src={project1} />
        <Work src={project2} />
        <Work src={project3} />
      </FlexWrapper>
      </Container>
    </StyledWorks>
  );
}

const StyledWorks = styled.section`
  min-height: 50vh;
  background-color: #f277b9fc;
`;
