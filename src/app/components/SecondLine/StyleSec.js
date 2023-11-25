import styled from "styled-components";

export const Nav = styled.div`
  height: 100px;
  width: 100vw;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
  margin-left: auto;
  border: 2px solid whitesmoke;
`;

export const Left = styled.div`
  padding: 5px;
  width: 10%;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
`;

export const SpanEl = styled.span`
  text-decoration: underline;
`;

export const Button = styled.button`
  padding: 10px 32px;
  font-size: 1rem;

  background: ${(props) => props.backGorundColor};
  color: ${(props) => props.textColor};
  border: 2px solid ${(props) => props.borderColor};
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    color: #4caf50;
  }
`;
