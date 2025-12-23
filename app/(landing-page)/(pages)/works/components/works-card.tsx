import { Routes } from "@/routes"
import { Typography } from "@/ui"
import { WorksProps } from "@/utils"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

export const WorksCard = ({ works }: { works: WorksProps }) => {
	return (
		<Link
			href={`${Routes.WORK}/${works._id}`}
			className={clsx(
				"border-y-2 col-span-1 border-[#6f6e6e]  flex items-center gap-10 p-4",
				"hover:shadow-sm shadow-white duration-200 transition-all ease-in-out",
				works._id % 2 === 0
					? "rounded-l-3xl border-l-2 pl-4"
					: "rounded-r-3xl border-r-2 pl-0"
			)}
		>
			<figure className=" w-60">
				<Image
					src={works.picture}
					className="rounded-2xl h-full"
					alt="work image"
				/>
			</figure>
			<div>
				<Typography
					variant="h3"
					font="genos"
					fontWeight="semi-bold"
					color="secondary"
					customClassName="leading-[130%]! tracking-[1px]"
				>
					{works.work}
				</Typography>
			</div>
		</Link>
	)
}
