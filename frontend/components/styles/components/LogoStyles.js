import styled from "styled-components";

export const LogoStyles = styled.h1`
  font-size: var(--fs-500);
  margin: 0;

  position: relative;
  z-index: 2;
  white-space: nowrap;

  a {
    text-decoration: none;
  }

  @media (max-width: 1312px) {
    font-size: var(--fs-500);

    position: relative;
    z-index: 2;
  }
`;
