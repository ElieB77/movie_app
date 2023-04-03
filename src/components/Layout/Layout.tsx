import { SideBar } from "../SideBar";
import styled from "styled-components";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <Container>
      <SideBar />
      <Main>{props.children}</Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 92%;
  position: relative;
  padding-top: 45px;
`;
