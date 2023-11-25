import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  height: 140vh;
  overflow-y: scroll;
  margin-bottom: 25px;
`;
export const Nav = styled.div`
  height: 100px;
  position: fixed;
  top: 325px;
  width: 65%;
  background-color: white;
  color: black;
  border: 2px solid whitesmoke;
  height: 120vh;
  overflow-y: scroll;
`;

export const First = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;
export const FirstDiv = styled.div`
  position: relative;
`;
export const Absolute = styled.span`
  position: absolute;
  top: 7px;
  right: 8px;

  cursor: pointer;
`;
export const Input = styled.input`
  height: 25px;
  width: 280px;
  border: 2px solid #d3d3d3;
  border-radius: 10px;
  padding: 5px;
  &:focus {
    border-color: green;
    outline: none; /* Optionally, remove the default outline */
  }
`;
export const SecondDiv = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;
export const Button = styled.button`
  padding: 10px 32px;
  font-size: 1rem;

  background: ${(props) => props.backGorundColor};
  color: ${(props) => props.textColor};
  border: 2px solid ${(props) => props.borderColor};
  font-weight: 600;
  border-radius: 25px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    color: green;
  }
`;

export const Card = styled.div`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin: auto;
  height: 120vh;

  padding-bottom: 600px;
`;

export const SecondMain = styled.div`
  height: 100vh;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: white;

  border: 2px solid whitesmoke;
  margin-bottom: 5px;
`;

export const Th = styled.th`
  padding: 12px 8px;
  text-align: left;
  font-weight: normal;
  color: #666;
  width: ${(props) => props.spWidth};
`;

export const Tbody = styled.tbody`
  height: 100vh;
  overflow-y: scroll;
  tr:nth-child(odd) {
    background-color: #f8f8f8;
  }
`;

export const Td = styled.td`
  padding: 12px 8px;
  border-bottom: 1px solid #eaeaea;
  width: ${(props) => props.spWidth};
`;

export const TButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Edit = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditSecond = styled.div`
  margin-left: "auto";
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TSButton = styled.button`
  padding: 10px 15px;
  font-size: 15px;

  background: ${(props) => props.backGorundColor};
  color: ${(props) => props.textColor};
  border: 0;
  font-weight: 200;
  border-radius: 25px;
  margin-right: 15px;
  cursor: pointer;
`;

export const NoBut = styled.div`
  border: 0;
  background-color: transparent;
`;

export const Modal = styled.div`
  height: 300px;
  width: 1200px;
`;

export const AbsoluteD = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  height: auto;
  width: 30%;
  padding: 45px;
  z-index: 100;
`;

export const Heading = styled.h1`
  text-align: center;
`;
export const Para = styled.p`
  text-align: center;
`;
export const InnerDiv = styled.div`
  display: flex;
  justify-content: end;
`;

export const InnerBut = styled.button`
  border: 0;
  margin-right: 15px;
  padding: 10px 32px;
  background-color: transparent;
`;

export const InnerCan = styled.p`
  text-align: end;
`;
export const OuterCan = styled.div`
  display: flex;
  align-items: center;
`;
