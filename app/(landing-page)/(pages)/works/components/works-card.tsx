import { Routes } from "@/routes"
import { Typography } from "@/ui"
import { AllWorksType } from "@/utils"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

export const WorksCard = ({ works }: { works: AllWorksType }) => {
	return (
		<Link
			href={`${Routes.WORK}/${works.slug}`}
			className={clsx(
				"border-y-2 col-span-1 border-[#6f6e6e]  flex items-center gap-7 p-4",
				"hover:shadow-sm shadow-white duration-200 transition-all ease-in-out",

				"rounded-3xl border-2 px-5"
			)}
		>
			<figure className=" w-60">
				<Image
					src={works.pictureURL}
					width={240}
					height={135}
					className="rounded-xl h-full"
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
