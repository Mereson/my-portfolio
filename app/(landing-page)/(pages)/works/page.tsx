"use client"
import { useGetAllWorks } from "@/lib/app"
import ArrowLeft from "@/public/assets/svgs/arrow-left-solid-full.svg"
import { WorksCard } from "./components/works-card"
import { AllWorksType } from "@/utils"
import { SkeletonLoader } from "@/ui"
import Image from "next/image"
import Link from "next/link"
import { Routes } from "@/routes"

const Page = () => {
	const { data, isLoading } = useGetAllWorks()

	const worksList: AllWorksType[] = data?.data?.data ? data.data.data : []
	return (
		<section className="px-6 pt-16 pb-20  sm:p-20">
			<Link href={Routes.HOME} className="w-full cursor-pointer">
				<Image
					src={ArrowLeft}
					height={30}
					className="h-[40px]"
					alt="arrow left"
				/>
			</Link>
			<div className="grid grid-cols-1 sm:grid-cols-2 mt-5  gap-10 gap-y-5 sm:gap-y-10">
				{isLoading
					? Array(6)
							.fill(null)
							.map((_, i) => (
								<div
									key={i}
									className="w-full sm:w-155 sm:h-[10.688rem] rounded-3xl sm:rounded-4xl border-2 gap-3.5 sm:gap-7 py-2 sm:py-4 px-3 sm:px-5 border-[#6f6e6e] flex items-center"
								>
									<SkeletonLoader customClassName="w-45 sm:w-55 h-[6.2rem] sm:h-[7.9rem] rounded-2xl! sm:rounded-xl!" />
									<SkeletonLoader customClassName="w-60 sm:w-70 h-7 sm:h-10.5" />
								</div>
							))
					: worksList.map((list) => <WorksCard key={list._id} works={list} />)}
			</div>
		</section>
	)
}

export default Page
