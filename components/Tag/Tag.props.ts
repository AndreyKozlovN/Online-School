import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: "normal" | "little";
	color?: "ghost" | "red" | "gray" | "green" | "primary";
	href?: string;
	children: ReactNode;
}