import styles from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";

import CheckIcon from "./check.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((advantage) => (
        <div key={advantage._id} className={styles.advantage}>
          <CheckIcon />

          <div className={styles.title}>{advantage.title}</div>

          <hr className={styles.verticalLine} />

          <div>{advantage.description}</div>
        </div>
      ))}
    </>
  );
};
