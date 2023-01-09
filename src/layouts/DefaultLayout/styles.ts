import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  padding: 0 160px;

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: 768px) {
    padding: 0 70px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 600px) {
    padding: 0 40px;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;
