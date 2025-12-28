"use client"
import { SkeletonLoader, Typography } from "@/ui"
import { SelectedWorksType, services } from "@/utils"
import { SelectedWorksCard, ServicesCard } from "../components"
import Link from "next/link"
import { Routes } from "@/routes"
import { useGetSelectedWorks } from "@/lib/app"

export const SelectedWorks = () => {
	const { data, isLoading } = useGetSelectedWorks()

	const worksList: SelectedWorksType[] = data?.data ? data.data : []

	return (
		<section
			id="selected-works"
			className="pt-[0.813rem] pb-20 relative max-w-[1400px] mx-auto"
		>
			<div className="grid grid-cols-3 gap-8">
				{services.map((service, i) => (
					<ServicesCard key={i} services={service} />
				))}
			</div>
			<section id="selected-section" className="mt-40 grid gap-8">
				<div className="flex items-baseline gap-2 ml-8">
					<Typography
						tag="h1"
						variant="h1"
						font="genos"
						color="secondary"
						fontWeight="light"
						customClassName="leading-[110%]"
					>
						Selected
					</Typography>
					<Typography
						tag="h1"
						variant="h1"
						font="outfit"
						color="secondary"
						fontWeight="light"
						customClassName="leading-[110%]"
					>
						Works
					</Typography>
				</div>
				<div className="grid grid-cols-2 gap-8 ">
					{isLoading
						? Array(4)
								.fill(null)
								.map((_, i) => (
									<div
										key={i}
										className="w-171 h-[23.971rem] rounded-4xl border border-[#6f6e6e]"
									>
										<SkeletonLoader customClassName="w-171 h-[23.971rem] rounded-4xl!" />
									</div>
								))
						: worksList.map((selectedWork) => (
								<SelectedWorksCard
									key={selectedWork._id}
									selectedWork={selectedWork}
								/>
							))}
				</div>
				<div className="w-full grid place-content-center">
					{isLoading ? (
						<SkeletonLoader customClassName="w-25 h-6" />
					) : (
						<Link href={Routes.ALL_WORKS} className=" w-fit flex">
							<Typography
								variant="h6"
								fontWeight="bold"
								color="white"
								customClassName="hover:text-[#E7A03A]! transition-colors duration-200 ease-in-out"
							>
								See More
							</Typography>
						</Link>
					)}
				</div>
			</section>
		</section>
	)
}
