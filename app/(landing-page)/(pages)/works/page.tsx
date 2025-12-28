"use client"
import { useGetAllWorks } from "@/lib/app"
// import { worksList } from "@/utils"
import { WorksCard } from "./components/works-card"
import { AllWorksType } from "@/utils"
import { SkeletonLoader } from "@/ui"

const Page = () => {
	const { data, isLoading } = useGetAllWorks()

	const worksList: AllWorksType[] = data?.data?.data ? data.data.data : []
	return (
		<section className="p-20 grid grid-cols-2 gap-10 gap-y-10">
			{isLoading
				? Array(6)
						.fill(null)
						.map((_, i) => (
							<div
								key={i}
								className="w-155 h-[10.688rem] rounded-4xl border-2 py-4 px-5 border-[#6f6e6e] flex items-center gap-7"
							>
								<SkeletonLoader customClassName="w-55 h-[7.9rem] rounded-xl!" />
								<SkeletonLoader customClassName="w-70 h-10.5" />
							</div>
						))
				: worksList.map((list) => <WorksCard key={list._id} works={list} />)}
		</section>
	)
}

export default Page

