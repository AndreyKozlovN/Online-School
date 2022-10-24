import React from 'react';
import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {

  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <P size="little">Маленький текст</P>
      <P size="normal">Средний текст</P>
      <P size="big">Большой текст</P>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
    </>
  );
}