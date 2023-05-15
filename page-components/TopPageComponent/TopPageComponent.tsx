import { Htag, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { HhData } from "../../components/hhData/HhData";
import { TopLevelCategory } from "../../interfaces/page.interface";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  console.log(page.hh);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={"h1"}>{page.title}</Htag>
        {products && (
          <Tag color="gray" size="normal">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>

      <div>
        {products &&
          products.map((prod) => <div key={prod._id}>{prod.title}</div>)}
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
    </div>
  );
};
