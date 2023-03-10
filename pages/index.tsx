import { GetStaticProps } from "next";
import React, { useState } from "react";
import axios from "axios";
import { Button, Htag, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="little">Маленький текст</P>
      <P>Средний текст</P>
      <P size="big">Большой текст</P>
      <Tag color="red" href="https://google.com">
        Google
      </Tag>
      <Tag color="green">Тэг</Tag>
      <Tag size="little" color="primary">
        Маленький
      </Tag>
      <Tag color="gray" size="little">
        Маленький
      </Tag>
      <Tag>Тэг</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
