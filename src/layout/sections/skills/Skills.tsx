import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Icon from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";

const skillsList = [
  "html",
  "css",
  "js",
  "react",
  "github",
  "git",
  "ts",
  "redux",
];

export function Skills() {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Tech Stack</SectionTitle>
        <p>Technologies I’ve been working with recently</p>
        <FlexWrapper wrap="wrap">
          {skillsList.map((skill) => (
            <Icon
              key={skill}
              iconId={skill}
              width="120"
              height="120"
              viewBox="0 0 120 120"
            />
          ))}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  min-height: 50vh;
  background-color: #1150ce;

  ${FlexWrapper} {
    gap: 50px;
  }
`;

const SectionTitle = styled.h2``;
