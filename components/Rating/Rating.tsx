import styles from './Rating.module.css';
import StarIcon from './Star.svg';
import { RatingProps } from "./Rating.props";
import { useEffect, useState, KeyboardEvent } from "react";
import cn from "classnames";

export const Rating = ({ isEditable = false, rating, setRating, children, className, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number): void => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={(): void => changeDisplay(i + 1)}
					onMouseLeave={(): void => changeDisplay(rating)}
					onClick={(): void => clickOnStar(i + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>): boolean | void => isEditable && handleSpace(i + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number): void => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const clickOnStar = (i: number): void => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent): void => {
		if (e.code != "Space" || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{
				ratingArray.map((r, i) => (
					<span key={i}>{r}</span>
				))
			}
		</div>
	);
};  