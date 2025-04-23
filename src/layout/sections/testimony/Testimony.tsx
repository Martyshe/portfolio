import styled from "styled-components"
import { Container } from "../../../components/Container"

export function Testimony() {
  return (
    <StyledTestimony>
       <Container>
       <p>For any questions please mail me:</p>
       <a href="#">hi@pavanmg.in</a>
       </Container>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
    min-height: 30vh;
    background-color: #ccd74e;
    margin: 0;
    ${Container} {
        text-align: center;
        p {
            margin: 0;
        }
    }
`