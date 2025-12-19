import clsx from "clsx"
import { TypographyProps, variantMapping } from "./index.types"
import { cva } from "class-variance-authority"
import { nunito, outfit, genos } from "@/styles/font"

const typography = cva("", {
	variants: {
		intent: {
			"title-xl": "text-[10rem]", // 160px
			"title-l": "text-9xl", // 128px
			"title-m": "text-[6rem]", // 96px
			"title-s": "text-[5rem]", // 80px
			h1: "text-[4rem]", // 64px
			h2: "text-5xl", // 48px
			h3: "text-[2rem]", // 32px
			h4: "text-2xl", // 24px
			h5: "text-xl", // 20px
			h6: "text-lg", // 18px
			"body-xl": "text-2xl", // 24px
			"body-l": "text-xl", // 20px
			"body-m": "text-lg", // 18px
			"body-r": "text-base", // 16px
			"body-s": "text-sm", // 14px
			"body-xs": "text-xs", // 12px
		},
		color: {
			primary: "text-[#0E0E0E]",
			"primary-muted": "text-[#999999]",
			secondary: "text-[#E7A03A]",
			white: "text-white"
		},
		font: { outfit: outfit, nunito: nunito, genos: genos },
		fontWeight: {
			thin: "font-thin",
			"extra-light": "font-extra-light",
			light: "font-light",
			regular: "font-regular",
			medium: "font-medium",
			"semi-bold": "font-semibold",
			bold: "font-bold",
			"extra-bold": "font-extra-bold",
			black: "font-black",
		},
		underline: { always: "underline", hover: "hover:underline", none: "" },
		align: {
			center: "text-center",
			start: "text-start",
			end: "text-end",
			left: "text-left",
			right: "text-right",
			justify: "text-justify",
		},
	},
	compoundVariants: [],
})

// Typography component
const Typography: React.FC<TypographyProps> = (props) => {
	const {
		variant = "body-r",
		color = "primary",
		tag,
		underline = "none",
		fontWeight = "regular",
		font,
		gutterBottom,
		noWrap,
		align = "left",
		customClassName = "",
		children,
	} = props

	// Resolved tag
	const Tag = (tag ||
		variantMapping[variant] ||
		"p") as keyof React.JSX.IntrinsicElements

	// Classes
	const className = clsx(
		"leading-[100%] tracking-normal",
		gutterBottom && "mb-4",
		noWrap && "overflow-hidden text-ellipsis whitespace-nowrap"
	)

	return (
		<Tag
			className={typography({
				intent: variant,
				color,
				underline,
				fontWeight,
				font,
				align,
				className: `${className} ${customClassName} `,
			})}
		>
			{children}
		</Tag>
	)
}

export { Typography }
export * from "./index.types"
