import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";

import cn from "classnames";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
