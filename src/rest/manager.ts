export interface LanyardError {
    message: string,
    code: string
}

export class Manager {
	public static async get(route: string | Request | URL): Promise<any> {
		return (async() => await new Promise((resolve, reject) => {
			fetch(route)
				.then(r => {
					resolve(r.json());
				})
				.catch(e => {
					reject(e);
				});
		}))();
	}

	public static async put(route: string | Request | URL, authorization: string, body: any): Promise<any> {
		return (async() => await new Promise((resolve, reject) => {
			fetch(route, {
				method: 'PUT',
				headers: {
					'Authorization': authorization
				},
				body
			})
				.then(r => {
					resolve(r);
				})
				.catch(e => {
					reject(e);
				});
		}))();
	}

	public static async delete(route: string | Request | URL, authorization: string): Promise<any> {
		return (async() => await new Promise((resolve, reject) => {
			fetch(route, {
				method: 'DELETE',
				headers: {
					'Authorization': authorization
				}
			})
				.then(r => {
					resolve(r);
				})
				.catch(e => {
					reject(e);
				});
		}))();
	}
}