import ArrowDown from "@/public/assets/svgs/arrow-down.svg"
import Image from "next/image"
import clsx from "clsx"
import { Typography } from "@/ui"
import Link from "next/link"
import { WorksProps } from "@/utils"
import { Routes } from "@/routes"

export const SelectedWorksCard = ({
	selectedWork,
}: {
	selectedWork: WorksProps
}) => {
	const { _id, picture, work } = selectedWork

	return (
		<figure className="w-171 relative rounded-4xl">
			<Image
				src={picture}
				height={383}
				width={684}
				className="size-fit rounded-4xl shadow-lg bg-[#00000062]"
				alt="work"
			/>
			<Link
				href={`${Routes.WORK}/${_id}`}
				className={clsx(
					"rounded-full bg-[#444141] border-2 border-[#444141] hover:border-[#E7A03A] w-fit p-1.5",
					"transition-all ease-in-out duration-150 cursor-pointer rotate-230 ",
					"absolute right-[50%] top-[50%] "
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
					"px-4 py-3 rounded-4xl mx-8 w-[38.75rem]",
					"leading-[130%]! tracking-[1px]",
					"absolute bottom-[32px]"
				)}
			>
				{work}
			</Typography>
		</figure>
	)
}
