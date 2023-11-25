import React from "react";
import { Button, Left, Nav, Right, SpanEl } from "./StyleSec";

const Second = () => {
  return (
    <Nav>
      <Left>
        <h4>
          {`order >  `} <SpanEl>Order124587</SpanEl>
        </h4>
        <h2>Order124587</h2>
      </Left>
      <Right>
        <Button
          borderColor="#4caf50"
          backGorundColor="white"
          textColor="#4caf50"
        >
          back
        </Button>
        <Button
          borderColor="#4caf50"
          backGorundColor="#4caf50"
          textColor="white"
        >
          approve order
        </Button>
      </Right>
    </Nav>
  );
};

export default Second;
