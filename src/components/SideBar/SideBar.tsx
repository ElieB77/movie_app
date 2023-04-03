import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { menu } from "@/services/menu";
import { LinkType } from "@/types/menu";
import { useRouter } from "next/router";

export const SideBar = (): JSX.Element => {
  const router = useRouter();
  return (
    <Container>
      <Nav>
        <Link href={menu.logo.href}>
          <Image
            src={menu.logo.src}
            width={menu.logo.width}
            height={menu.logo.height}
            alt={menu.logo.alt}
          />
        </Link>
        <NavLinks>
          {menu.links.map((link: LinkType) => {
            const { id, href, icon, alt } = link;

            return (
              <Link
                key={id}
                href={href}
                className={router.pathname === href ? "active" : ""}
              >
                <Image
                  src={icon}
                  width={menu.iconWidth}
                  height={menu.iconHeight}
                  alt={alt}
                />
              </Link>
            );
          })}
        </NavLinks>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 8%;
`;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.secondary_dark};
  height: 95%;
  border-radius: 20px;
  position: fixed;
  text-align: center;
  padding-top: 35px;
  width: 5%;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top 75px;

  & a:hover {
    filter: invert(40%) sepia(57%) saturate(4644%) hue-rotate(337deg) brightness(104%) contrast(98%);
  }

  & .active {
    filter: invert(40%) sepia(57%) saturate(4644%) hue-rotate(337deg) brightness(104%) contrast(98%);
  }
`;
