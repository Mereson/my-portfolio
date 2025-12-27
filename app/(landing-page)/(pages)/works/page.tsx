"use client"
import { useGetAllWorks } from "@/lib/app"
// import { worksList } from "@/utils"
import { WorksCard } from "./components/works-card"
import { AllWorksType } from "@/utils"

const Page = () => {
	const { data, isLoading } = useGetAllWorks()

	const worksList: AllWorksType[] = data?.data?.data ? data.data.data : []
	return (
		<section className="p-20 grid grid-cols-2 gap-10 gap-y-10">
			{worksList.map((list) => (
				<WorksCard key={list._id} works={list} />
			))}
		</section>
	)
}

export default Page
