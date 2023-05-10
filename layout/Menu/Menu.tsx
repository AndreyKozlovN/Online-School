import styles from "./Menu.module.css";
import cn from "classnames";

import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { AppContext } from "../../context/app.context";
import { firstLevelMenu } from "../../helpers/helpers";

import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string): void => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelAcrive]: menu.id == firstCategory,
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>
            {menu.id == firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((menu) => {
          if (
            menu.pages
              .map((page) => page.alias)
              .includes(router.asPath.split("/")[2])
          ) {
            menu.isOpened = true;
          }
          return (
            <div key={menu._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={(): void => openSecondLevel(menu._id.secondCategory)}
              >
                {menu._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: menu.isOpened,
                })}
              >
                {buildThirdLevel(menu.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <Link href={`/${route}/${page.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]:
              `/${route}/${page.alias}` == router.asPath,
          })}
        >
          {page.category}
        </a>
      </Link>
    ));
  };

  return (
    <div className="styles.menu">
      <ul>{buildFirstLevel()}</ul>
    </div>
  );
};
