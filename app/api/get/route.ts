// /app/api/get/route.ts
import { NextRequest, NextResponse } from "next/server"

const baseUrl = process.env.BASE_URL

export async function GET(req: NextRequest) {
	try {
		if (req.method !== "GET") {
			return NextResponse.json(
				{ success: false, message: "Method not allowed" },
				{ status: 405 }
			)
		}
		const { searchParams } = new URL(req.url)
		const endpoint = searchParams.get("endpoint")

		if (!endpoint) {
			return NextResponse.json(
				{ success: false, message: "Missing endpoint" },
				{ status: 400 }
			)
		}

		const headers: HeadersInit = {
			"Content-Type": "application/json",
		}

		console.log(endpoint)
		const response = await fetch(`${baseUrl}/${endpoint}`, {
			method: "GET",
			headers,
		})

		const result = await response.json()

		if (!response.ok || !result.success) {
			return NextResponse.json(
				{ success: false, message: result.message || "Backend error" },
				{ status: response.status }
			)
		}

		return NextResponse.json({
			success: true,
			data: result.data,
			message: result.message,
		})
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{
				success: false,
				message: "Oops! An unexpected error occurred",
				error: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		)
	}
}
