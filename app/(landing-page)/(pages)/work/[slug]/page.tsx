"use client"
import { useGetWorkBySlug } from "@/lib/app"
import { SkeletonLoader, Typography } from "@/ui"
import { IndividualWorkProps } from "@/utils"
import ArrowLeft from "@/public/assets/svgs/arrow-left-solid-full.svg"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

const WorkPage = () => {
	const params = useParams()
	const slug = params?.slug as string

	const navigate = useRouter()

	const { data, isLoading } = useGetWorkBySlug(slug)

	const work: IndividualWorkProps = data?.data ? data.data : {}

	return (
		<section className="bg-white py-10 px-5 sm:p-18">
			<div
				onClick={() => navigate.back()}
				className="w-full mb-3 cursor-pointer"
			>
				<Image
					src={ArrowLeft}
					height={30}
					className="h-[40px]"
					alt="arrow left"
				/>
			</div>

			{isLoading ? (
				<SkeletonLoader
					variant="solid"
					customClassName="w-[24.063rem] sm:w-7xl h-70 sm:h-[45.223rem] rounded-4xl shadow-lg"
				/>
			) : (
				<figure className="rounded-4xl">
					<Image
						src={work.pictureURL}
						width={1280}
						height={723}
						className="w-[24.063rem] sm:w-7xl h-70 sm:h-[45.223rem] rounded-4xl shadow-lg bg-[#00000062]"
						alt="work"
					/>
				</figure>
			)}

			{isLoading ? (
				<article className="m-4 sm:m-8 mt-6 sm:mt-12 grid gap-3">
					<SkeletonLoader
						variant="solid"
						customClassName="w-40! sm:w-xl h-[1.2rem] sm:h-[2.4rem] mb-2 rounded-lg"
					/>
					<div className="grid gap-2">
						<SkeletonLoader
							variant="solid"
							customClassName="w-full h-5 sm:h-7 rounded-lg"
						/>
						<SkeletonLoader
							variant="solid"
							customClassName="w-full h-5 sm:h-7 rounded-lg"
						/>
						<SkeletonLoader
							variant="solid"
							customClassName="w-full h-5 sm:h-7 rounded-lg"
						/>

						<SkeletonLoader
							variant="solid"
							customClassName="w-full h-5 sm:h-7 rounded-lg mt-4.5 sm:mt-9"
						/>
						<SkeletonLoader
							variant="solid"
							customClassName="w-full h-5 sm:h-7 rounded-lg"
						/>
					</div>
				</article>
			) : (
				<article className="m-4 sm:m-8 mt-6 sm:mt-12 grid gap-3">
					<Typography
						variant="h3"
						font="genos"
						fontWeight="semi-bold"
						color="secondary"
						customClassName="leading-[130%]! tracking-[1px]"
					>
						{work.work}
					</Typography>
					<Typography
						variant="body-l"
						customClassName="leading-[160%]! tracking-[1px] text-justify! whitespace-pre-line mb-4"
					>
						{work.body}
					</Typography>
					<Typography variant="body-m">
						Link to site:{" "}
						<Link
							href={work.link ? work.link : "#"}
							target="_blank"
							className="text-[#E7A03A] hover:text-[#a14c4c] cursor-pointer transition-colors duration-200 ease-in-out"
						>
							{work.link}
						</Link>
					</Typography>
				</article>
			)}
		</section>
	)
}

export default WorkPage
