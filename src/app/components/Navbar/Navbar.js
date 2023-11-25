import React from "react";
import { Left, Nav, Right } from "./NavStyled";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <Nav>
      <Left>
        <h1>Reeco</h1>
        <p>Store</p>
        <p>Order</p>
        <p>Analytics</p>
      </Left>
      <Right>
        <MdOutlineShoppingCart style={{ height: "25px", width: "25px" }} />
        <h1>Hello,James</h1>
      </Right>
    </Nav>
  );
};

export default Navbar;
