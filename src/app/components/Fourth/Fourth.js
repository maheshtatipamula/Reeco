import React, { useState } from "react";
import { Main } from "../Third/StyleThrid";

import {
  Absolute,
  Button,
  Card,
  First,
  FirstDiv,
  Input,
  Nav,
  SecondDiv,
  Table,
  Th,
  Tbody,
  Thead,
  Td,
  TButton,
  Edit,
  EditSecond,
  TSButton,
  AbsoluteD,
  Heading,
  Para,
  InnerDiv,
  InnerBut,
  InnerCan,
  OuterCan,
} from "./StyleFourth";
import { IoPrint } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  updateStatus,
} from "../../../features/products/productSlice";
const Fourth = () => {
  const items = useSelector(selectProducts);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  const dispatch = useDispatch();

  const handleSecondTick = (productId) => {
    setSelectedProduct(productId);
    setSecond(true);
  };
  const handleFirstTick = (productId) => {
    setSelectedProduct(productId);
    setFirst(true);
  };

  const handleNoClick = async ({ status }) => {
    await dispatch(updateStatus({ selectedProduct, newStatus: status }));

    setFirst(false);
    setSecond(false);
    setSelectedProduct(null);
  };
  const handleReturnFirst = () => {
    setSelectedProduct(null);
    setFirst(false);
  };

  const handleReturnSecond = () => {
    setSelectedProduct(null);
    setSecond(false);
  };

  return (
    <>
      <Main>
        <Nav>
          <First>
            <FirstDiv>
              <Input type="text" placeholder="search ....." />
              <Absolute>
                <IoSearch style={{ height: "22px", width: "22px" }} />
              </Absolute>
            </FirstDiv>
            <SecondDiv>
              <Button
                borderColor="#4caf50"
                backGorundColor="white"
                textColor="#4caf50"
              >
                Add Item
              </Button>
              <IoPrint style={{ height: "25px", width: "25px" }} />
            </SecondDiv>
          </First>
          <SecondDiv>
            <Card>
              <Table>
                <Thead>
                  <tr>
                    <Th spWidth="250px">Product Name</Th>
                    <Th spWidth="150px">Brand</Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                    <Th>Total</Th>
                    <Th spWidth="300px">Status</Th>
                  </tr>
                </Thead>
                <Tbody>
                  {items &&
                    items.map((item) => (
                      <tr key={item.id}>
                        <Td>
                          <OuterCan>
                            <img
                              src={`/${item.image}`}
                              style={{
                                height: "35px",
                                width: "35px",
                                borderRadius: "50%",
                                background: "transparent",
                              }}
                            />
                            {item.title}
                          </OuterCan>
                        </Td>
                        <Td>{item.brand}</Td>
                        <Td>${item.quantity}</Td>
                        <Td>{item.price}</Td>
                        <Td>${item.total}</Td>
                        <Td>
                          <Edit>
                            {item.status === "urgent" && (
                              <TSButton
                                borderColor="red"
                                backGorundColor="red"
                                textColor="white"
                              >
                                Missing-Urgent
                              </TSButton>
                            )}
                            {item.status === "missing" && (
                              <TSButton
                                borderColor="orange"
                                backGorundColor="orange"
                                textColor="white"
                              >
                                Missing
                              </TSButton>
                            )}
                            {item.status === "approved" && (
                              <TSButton
                                borderColor="#4caf50"
                                backGorundColor="#4caf50"
                                textColor="white"
                              >
                                Approved
                              </TSButton>
                            )}
                            {item.status === "idle" && (
                              <TSButton
                                borderColor="transparent"
                                backGorundColor="transparent"
                                textColor="transparent"
                              >
                                Approved
                              </TSButton>
                            )}

                            <EditSecond>
                              <TiTick
                                onClick={() => handleSecondTick(item.id)}
                                style={{ height: "25px", width: "25px" }}
                              />{" "}
                              <RxCross1
                                onClick={() => handleFirstTick(item.id)}
                                style={{ height: "15px", width: "15px" }}
                              />
                              <TButton>Edit</TButton>
                            </EditSecond>
                          </Edit>
                        </Td>
                      </tr>
                    ))}
                </Tbody>
              </Table>
            </Card>
          </SecondDiv>
        </Nav>
      </Main>
      {first && (
        <AbsoluteD>
          <InnerCan>
            <RxCross1 onClick={() => handleReturnFirst()} />
          </InnerCan>
          <Heading>Missing Product ?</Heading>
          <Para>is Chicken Breast Fillets, Boneless urgent</Para>
          <InnerDiv>
            <InnerBut
              onClick={() =>
                handleNoClick({ selectedProduct, status: "urgent" })
              }
            >
              yes
            </InnerBut>
            <InnerBut
              onClick={() =>
                handleNoClick({ selectedProduct, status: "missing" })
              }
            >
              No
            </InnerBut>
          </InnerDiv>
        </AbsoluteD>
      )}
      {second && (
        <AbsoluteD>
          <InnerCan>
            <RxCross1 onClick={() => handleReturnSecond()} />
          </InnerCan>
          <Heading>Approve Product ?</Heading>
          <Para>Chicken Breast Fillets, Boneless </Para>
          <InnerDiv>
            <InnerBut
              onClick={() =>
                handleNoClick({ selectedProduct, status: "approved" })
              }
            >
              yes
            </InnerBut>
          </InnerDiv>
        </AbsoluteD>
      )}
    </>
  );
};

export default Fourth;
