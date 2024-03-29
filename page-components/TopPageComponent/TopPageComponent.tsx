import { useEffect, useReducer } from "react";

import { Advantages, Htag, Sort, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { HhData } from "../../components/hhData/HhData";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    { products, sort: SortEnum.Rating }
  );

  const setSort = (sort: SortEnum): void => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <>
      <div className={styles.title}>
        <Htag tag={"h1"}>{page.title}</Htag>

        {products && (
          <Tag color="gray" size="normal">
            {products.length}
          </Tag>
        )}

        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts &&
          sortedProducts.map((prod) => <div key={prod._id}>{prod.title}</div>)}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag={"h2"}>Вакансии - {page.category}</Htag>

        <Tag color="red" size="normal">
          hh.ru
        </Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>

          <Advantages advantages={page.advantages} />

          {page.seoText && (
            <div
              className={styles.seo}
              dangerouslySetInnerHTML={{ __html: page.seoText }}
            />
          )}

          <Htag tag="h2">Получаемые навыки</Htag>

          {page.tags.map((tag) => (
            <Tag key={tag} color="primary">
              {tag}
            </Tag>
          ))}
        </>
      )}
    </>
  );
};
