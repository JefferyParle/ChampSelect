import { Badge } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  VideogameAsset,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  ${tablet({ height: "49px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${tablet({ padding: "10px 20px" })}
  ${mobile({ padding: "10px 20px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
  ${tablet({ flex: 0 })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${tablet({ border: "none", marginLeft: "0", padding: "0" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  ${tablet({ fontSize: "24px" })}
`;

const LogoIcon = styled.div`
  display: flex;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ flex: 3 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
  ${tablet({ fontSize: "12px", marginLeft: "10px" })}
`;

export default function Navbar({ cartCount }) {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ChampSelect</Logo>
          <LogoIcon>
            <VideogameAsset color="secondary" />
          </LogoIcon>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
