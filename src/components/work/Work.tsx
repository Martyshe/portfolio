import styled from "styled-components";
import Icon from "../icon/Icon";

type WorkPropsType = {
    src: string
}

export function Work( props: WorkPropsType) {
  return (
    <StyledWork>
          <Image src={props.src} />
          <h3>Project Tile goes here</h3>
          <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
          <p>Tech stack : HTML , JavaScript, SASS, React</p>
          <div>
            <div>
              <Icon iconId="website" />
              <a href="#">Live Preview</a>
            </div>
            <div>
              <Icon iconId="gitLink" />
              <a href="#">View Code</a>
            </div>
          </div>
        </StyledWork>
  )
}

const StyledWork = styled.div`
    max-width: 374px;
    width: 100%;
    min-height: 566px;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
`
