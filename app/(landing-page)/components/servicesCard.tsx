import { Typography } from "@/ui"
import { ServicesProps } from "@/utils"

export const ServicesCard = ({ services }: { services: ServicesProps }) => {
	return (
		<article className="p-12 bg-[#0000000d] col-span-1 grid gap-2">
			<Typography
				variant="h4"
				font="genos"
				fontWeight="light"
				customClassName="leading-[130%]! tracking-[1px]!"
			>
				{services.text}
			</Typography>
			<Typography
				font="nunito"
				color="primary-muted"
				customClassName="leading-[180%]! max-w-[21.833rem]"
			>
				{services.subtext}
			</Typography>
		</article>
	)
}
