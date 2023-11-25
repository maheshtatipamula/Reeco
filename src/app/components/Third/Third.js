import React from "react";
import { div, Main, Mb, Nav } from "./StyleThrid";
import { IoSnowSharp } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaBeer } from "react-icons/fa";

const Third = () => {
  return (
    <Main>
      <Nav>
        <div>
          <p>Suppliers</p>
          <h5>East Coast fruits & vegetables</h5>
        </div>{" "}
        <div>
          <p>Shipping Date</p>
          <h5>Thu,Feb 10 </h5>
        </div>{" "}
        <div>
          <p>Total</p>
          <h5>$ 15,028.3</h5>
        </div>{" "}
        <div>
          <p style={{ textAlign: "center" }}>Category</p>
          <Mb>
            <IoSnowSharp style={{ margin: "4px" }} />
            <IoFastFoodOutline style={{ margin: "4px" }} />
            <FaBeer style={{ margin: "4px" }} />
          </Mb>
        </div>{" "}
        <div>
          <p>Departement</p>
          <h5>300-444-678</h5>
        </div>
        <div>
          <p>Status</p>
          <h5>Awaiting your Approvel</h5>
        </div>
      </Nav>
    </Main>
  );
};

export default Third;
