import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  VideogameAsset,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet, smallScreen } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: darkred;
  color: white;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
  ${smallScreen({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  ${mobile({ padding: "20px" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 30px;
  ${mobile({ padding: "20px" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 24px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 20px;

  :hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 30px;
  ${mobile({ padding: "20px" })}
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.h1`
  font-size: 50px;
  ${mobile({ fontSize: "40px" })}
  ${tablet({ fontSize: "40px" })}
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: firebrick;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 16px;
`;

const LogoIcon = styled.div`
  transform: scale(1.8);
  margin-top: 5px;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <LogoContainer>
          <Logo>ChampSelect</Logo>
          <LogoIcon>
            <VideogameAsset color="secondary" />
          </LogoIcon>
        </LogoContainer>
        <Desc>
          Conquer the rift with only the best champions at your disposal.
          Champions, Skins, Chroma's and more only available at ChampSelect. We
          provide the tools, you provide the skill. Will you be the next
          summoner to win it all?
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Champions</ListItem>
          <ListItem>Skins</ListItem>
          <ListItem>Chromas</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms of Service</ListItem>
          <ListItem>Privacy Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          12345 E Number St, WA 67890
        </ContactItem>
        <ContactItem>
          <Phone />
          +1 234 567 8901
        </ContactItem>
        <ContactItem>
          <MailOutline />
          Summoners@Rift.com
        </ContactItem>
      </Right>
    </Container>
  );
}
