import styles from './P.module.css';
import { PProps } from "./P.props";
import cn from "classnames";

export const P = ({ size = "normal", children, className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.big]: size == "big",
				[styles.normal]: size == "normal",
				[styles.little]: size == "little"
			})}{...props}
		>
			{children}
		</p>
	);
};