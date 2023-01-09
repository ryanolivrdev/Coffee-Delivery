import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;

  height: 104px;

  padding: 2rem 0;

  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
`;

export const MenuWrapper = styled.nav`
  display: flex;
  position: relative;

  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme["yellow-100"]};
    color: ${({ theme }) => theme["yellow-700"]};
  }
`

export const LocationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme["purple-100"]};
  color: ${({ theme }) => theme["purple-500"]};

  cursor: pointer;

  p {
    color: ${({ theme }) => theme["purple-700"]};
    font-size: 0.875rem;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -8.35px;
  top: -8px;


  min-width: 1.25rem;
  min-height: 1.25rem;

  border-radius: 1000px;

  font-size: 0.75rem;
  color: ${({ theme }) => theme["white"]};

  background-color: ${({ theme }) => theme["yellow-700"]};
`

