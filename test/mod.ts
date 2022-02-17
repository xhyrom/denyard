import { getUser, isError, setKv, deleteKv, WebSocket as LanyardWSClient } from '../mod.ts';

(async() => {
	// API - CHECK USER
	const user = await getUser('525316393768452098');
	if (!isError(user)) {
		console.log(user.discord_user);
	} else {
		console.log(user.code, user.message);
	}

	// API - KV
	const userSetKv = await setKv('apikey', 'userId', 'name', 'random value loool');
	console.log(userSetKv)

	const userDeleteKv = await deleteKv('apikey', 'userId', 'name');
	console.log(userDeleteKv)

	// Socket
	const ws = new LanyardWSClient({
		subscribe: [ '525316393768452098' ]
	});

	ws.on('init', (id, user) => {
		console.log('init', id, user);
	});

	ws.on('update', user => {
		console.log('update', user);
	});
})();