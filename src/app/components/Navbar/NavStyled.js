import styled from "styled-components";

export const Nav = styled.div`
  height: 80px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #4caf50;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
`;
