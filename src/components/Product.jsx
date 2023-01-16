import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  color: white;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 30px;
  margin: 0 50px;
  text-align: center;
  margin-bottom: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const PriceImg = styled.img`
  width: 40px;
`;

const Price = styled.h4`
  font-size: 20px;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 380px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
  ${mobile({ minWidth: "280px", height: "340px" })}
  ${tablet({ minWidth: "280px", height: "320px" })}
`;

const Circle = styled.div`
  width: 85%;
  height: 85%;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 77%;
  width: 77%;
  border-radius: 50%;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: gold;
    transform: scale(1.1);
  }
`;

const IconContainer = styled.div`
  display: flex;
  color: black;
`;

export default function Product({ item, increaseCC }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <PriceContainer>
          <PriceImg src="./images/RP_icon.png" />
          <Price>{item.cost}</Price>
        </PriceContainer>
        <IconContainer>
          <Icon>
            <ShoppingCartOutlined onClick={increaseCC} />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </IconContainer>
      </Info>
    </Container>
  );
}
