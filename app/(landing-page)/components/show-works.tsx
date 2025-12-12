"use client"
import ArrowDown from "@/public/assets/svgs/arrow-down.svg"
import { Typography } from "@/ui"
import clsx from "clsx"
import { scrollIntoView } from "@/utils"
import Image from "next/image"

export const ShowWorks = () => {
	return (
		<div className="mt-4 flex w-fit justify-center items-center gap-4">
			<div
				onClick={() => scrollIntoView("selected-works")}
				className={clsx(
					"rounded-full bg-[#0E0E0E] hover:border-[#E7A03A] border-2 p-2",
					"transition-all ease-in-out duration-150 cursor-pointer"
				)}
			>
				<Image src={ArrowDown} alt="arrow down" />
			</div>
			<Typography variant="body-s" color="secondary">
				My Services
			</Typography>
		</div>
	)
}
