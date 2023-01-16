import styled from "styled-components";
import { mobile, smallScreen } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "25vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 50px;
  ${smallScreen({ fontSize: "35px" })}
`;

const Button = styled.button`
  border: none;
  padding: 14px;
  font-size: 18px;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>BROWSE NOW</Button>
      </Info>
    </Container>
  );
}
