import styled, { css } from "styled-components";

const test = css`
  text-align: center;
  ${10 > 5 && "backgrpund-color: yellow"}
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600px;
  background-color: yellow;
  ${test}
`;

export default Heading;
