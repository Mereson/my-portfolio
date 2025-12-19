import React from "react"
import type { HTMLAttributes } from "react"

export const variantMapping = {
	"title-xl": "h1",
	"title-l": "h1",
	"title-m": "h1",
	"title-s": "h1",
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	"body-xl": "p",
	"body-l": "p",
	"body-m": "p",
	"body-r": "p",
	"body-s": "p",
	"body-xs": "p",
}

export type TypographyVariant = keyof typeof variantMapping

export type TypographyColors = "primary" | "primary-muted" | "secondary" | "white"

export type TypographyAlign =
	| "start"
	| "end"
	| "left"
	| "right"
	| "center"
	| "justify"

export type TypographyFontWeight =
	| "thin"
	| "extra-light"
	| "light"
	| "regular"
	| "medium"
	| "semi-bold"
	| "bold"
	| "extra-bold"
	| "black"

export type TypographyFont = "outfit" | "nunito" | "genos"

export interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
	tag?: keyof React.JSX.IntrinsicElements
	variant?: TypographyVariant
	color?: TypographyColors
	fontWeight?: TypographyFontWeight
	gutterBottom?: boolean
	align?: TypographyAlign
	noWrap?: boolean
	underline?: "none" | "always" | "hover"
	customClassName?: string
	children?: React.ReactNode
	font?: TypographyFont
}
