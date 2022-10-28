import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size="little">Маленький текст</P>
      <P>Средний текст</P>
      <P size="big">Большой текст</P>
      <Tag color="red" href="https://google.com">Google</Tag>
      <Tag color="green">Тэг</Tag>
      <Tag size="little" color="primary">Маленький</Tag>
      <Tag color="gray" size="little">Маленький</Tag>
      <Tag>Тэг</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);