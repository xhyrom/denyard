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
                })
        }))();
    }
}