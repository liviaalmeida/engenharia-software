export default class API {
	static base = 'http://localhost:3000'
	static headers = {
		'Content-Type': 'application/json'
	}

	static url(endpoint: string): string {
		return `${API.base}${endpoint}`
	}

	// eslint-disable-next-line
	async get(endpoint: string): Promise<any> {
		const response = await fetch(API.url(endpoint), {
			method: 'GET',
			headers: API.headers,
		})
		return await response.json()
	}

	// eslint-disable-next-line
	async post(endpoint: string, body: unknown): Promise<any> {
		const response = await fetch(API.url(endpoint), {
			method: 'POST',
			headers: API.headers,
			body: JSON.stringify(body),
		})
		return await response.json()
	}
}
