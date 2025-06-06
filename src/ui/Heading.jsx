import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "backgrpund-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    
  line-height: 1.4;
`;

export default Heading;
