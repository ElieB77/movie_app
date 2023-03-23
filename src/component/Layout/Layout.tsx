import { SideBar } from "../SideBar";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <main>
      <SideBar />
      <main>{props.children}</main>
    </main>
  );
};
