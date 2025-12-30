import ArrowDown from "@/public/assets/svgs/arrow-down.svg"
import Image from "next/image"
import clsx from "clsx"
import { Typography } from "@/ui"
import Link from "next/link"
import { Routes } from "@/routes"
import { SelectedWorksType } from "@/utils"

export const SelectedWorksCard = ({
	selectedWork,
}: {
	selectedWork: SelectedWorksType
}) => {
	const { pictureURL, work, slug } = selectedWork

	return (
		<figure className="w-full h-60 lg:h-[23.971rem] col-span-1 relative rounded-2xl sm:rounded-4xl">
			<Image
				src={pictureURL}
				height={383}
				width={684}
				className="w-full h-full rounded-2xl sm:rounded-4xl shadow-lg bg-[#00000062]"
				alt="work"
			/>
			<Link
				href={`${Routes.WORK}/${slug}`}
				className={clsx(
					"rounded-full bg-[#444141] border sm:border-2 border-[#444141] hover:border-[#E7A03A] w-fit p-[2px] sm:p-1.5",
					"transition-all ease-in-out duration-150 cursor-pointer rotate-230 ",
					"absolute right-[48%] sm:right-[50%] top-[43%] sm:top-[50%] "
				)}
			>
				<Image src={ArrowDown} alt="arrow down" />
			</Link>
			<Typography
				tag="div"
				variant="h4"
				font="genos"
				fontWeight="semi-bold"
				color="secondary"
				customClassName={clsx(
					"bg-[#ffffff28] border-[1px] border-[#00000062] backdrop-blur-[15px]",
					"px-3 sm:px-4 py-1 py-1.5 sm:py-3 rounded-4xl mx-4 w-[90%]",
					"leading-[130%]! tracking-[1px]",
					"absolute bottom-8 max-[22.75rem]:bottom-6 "
				)}
			>
				{work}
			</Typography>
		</figure>
	)
}
