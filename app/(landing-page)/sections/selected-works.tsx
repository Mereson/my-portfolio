import { Typography } from "@/ui"
import { selectedWorksList, services } from "@/utils"
import { SelectedWorksCard, ServicesCard } from "../components"
import Link from "next/link"

export const SelectedWorks = () => {
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
					{selectedWorksList.map((selectedWork, i) => (
						<SelectedWorksCard key={i} selectedWork={selectedWork} />
					))}
				</div>
				<div className="w-full grid place-content-center">
					<Link href={""} className=" w-fit flex">
						<Typography
							variant="h6"
							fontWeight="bold"
							color="white"
							customClassName="hover:text-[#E7A03A]! transition-colors duration-200 ease-in-out"
						>
							See More
						</Typography>
					</Link>
				</div>
			</section>
		</section>
	)
}
