import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet, smallScreen } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
  ${tablet({ fontSize: "50px", textAlign: "center" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 25px;
  ${mobile({ textAlign: "center", fontSize: "20px", margin: "20px" })}
  ${tablet({ textAlign: "center", fontSize: "20px" })}
  ${smallScreen({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
  ${tablet({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 14;
  padding-left: 20px;
  font-size: 16px;
  ${mobile({ flex: 6 })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: firebrick;
  color: white;
  cursor: pointer;
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Summoner's Weekly</Title>
      <Desc>
        Join our newsletter to get weekly updates on sales, champion rotations,
        and more!
      </Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
