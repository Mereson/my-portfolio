import { worksList } from "@/utils"
import { WorksCard } from "./components/works-card"

const Page = () => {
	return (
		<section className="p-20 grid grid-cols-2 gap-10 gap-y-10">
			{worksList.map((list, i) => (
                <WorksCard key={i} works={list}/>
            ))}
		</section>
	)
}

export default Page
