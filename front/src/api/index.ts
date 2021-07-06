export default class API {
	static base = 'http://localhost:3000'
	static headers = {
		'Content-Type': 'application/json'
	}

	static url(endpoint: string): string {
		return `${API.base}${endpoint}`
	}

	async get(endpoint: string): Promise<Response> {
		return await fetch(API.url(endpoint), {
			method: 'GET',
			headers: API.headers,
		})
	}

	async post(endpoint: string, body: unknown): Promise<Response> {
		return await fetch(API.url(endpoint), {
			method: 'POST',
			headers: API.headers,
			body: JSON.stringify(body),
		})
	}
}
