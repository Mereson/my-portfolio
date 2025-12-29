import clsx from "clsx"
import { TypographyProps, variantMapping } from "./index.types"
import { cva } from "class-variance-authority"
import { nunito, outfit, genos } from "@/styles/font"

const typography = cva("", {
	variants: {
		intent: {
			"title-xl": "xl:text-[10rem] lg:text-9xl md:text-[6rem] sm:text-[5rem] text-[4rem]", // 160px
			"title-l": "xl:text-9xl lg:text-[6rem] md:text-[5rem] sm:text-[4rem] text-5xl", // 128px
			"title-m": "xl:text-[6rem] lg:text-[5rem] md:text-[4rem] sm:text-5xl text-[2rem]", // 96px
			"title-s": "xl:text-[5rem] lg:text-[4rem] md:text-5xl sm:text-[2rem] text-2xl", // 80px
			h1: "xl:text-[4rem] text-5xl ", // 64px
			h2: "xl:text-5xl lg:text-[2rem] md:text-2xl sm:text-xl text-lg", // 48px
			h3: "xl:text-[2rem] lg:text-2xl md:text-xl sm:text-lg text-base", // 32px
			h4: "xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm", // 24px
			h5: "xl:text-xl lg:text-[6rem] md:text-[5rem] sm:text-[4rem] text-5xl", // 20px
			h6: "xl:text-lg lg:text-base text-sm", // 18px
			"body-xl": "xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm", // 24px
			"body-l": "xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs", // 20px
			"body-m": "xl:text-lg lg:text-base md:text-sm text-xs ", // 18px
			"body-r": "xl:text-base lg:text-sm text-xs", // 16px
			"body-s": "xl:text-sm text-xs ", // 14px
			"body-xs": "xl:text-xs lg:text-[6rem] md:text-[5rem] sm:text-[4rem] text-5xl", // 12px
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
