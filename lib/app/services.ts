import { useQuery } from "@tanstack/react-query"

export const getAllWorks = async () => {
	const res = await fetch("/api/get?endpoint=works/")

	const result = await res.json()

	if (!result.success) throw new Error(result.message || "Error getting works")

	return result
}

export const getSelectedWorks = async () => {
	const res = await fetch("/api/get?endpoint=works/selected")

	const result = await res.json()

	if (!result.success)
		throw new Error(result.message || "Error getting selected works")

	return result
}

export const getWorkBySlug = async (slug: string) => {
	const res = await fetch(`/api/get?endpoint=works/${slug}`)

	const result = await res.json()

	if (!result.success)
		throw new Error(result.message || "Error getting selected works")

	return result
}

export const useGetAllWorks = () => {
	return useQuery({
		queryKey: ["All Works"],
		queryFn: async () => {
			return await getAllWorks()
		},
	})
}

export const useGetSelectedWorks = () => {
	return useQuery({
		queryKey: ["Selected Works"],
		queryFn: async () => {
			return await getSelectedWorks()
		},
	})
}

export const useGetWorkBySlug = (slug: string) => {
	return useQuery({
		queryKey: ["Single Work"],
		queryFn: async () => {
			return await getWorkBySlug(slug)
		},
	})
}
