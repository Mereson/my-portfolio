import { Typography } from "@/ui"
import { selectedWorksList, services } from "@/utils"
import { SelectedWorksCard, ServicesCard } from "../components"

export const SelectedWorks = () => {
	return (
		<section
			id="selected-works"
			className="pt-[0.813rem] max-w-[1400px] mx-auto"
		>
			<div className="grid grid-cols-3 gap-8 place-items-center">
				{services.map((service, i) => (
					<ServicesCard key={i} services={service} />
				))}
			</div>
			<section className="mt-40">
				<div className="flex items-baseline gap-2 ml-8 mb-8">
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
						// color="secondary"
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
			</section>
		</section>
	)
}
