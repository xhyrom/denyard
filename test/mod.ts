import { getUser, isError, WebSocket as LanyardWSClient } from '../mod.ts';

(async() => {
    const user = await getUser('525316393768452098');
    if (!isError(user)) {
        console.log(user.discord_user);
    } else {
        console.log(user.code, user.message);
    }

    const ws = new LanyardWSClient({
        subscribe: [ '525316393768452098' ]
    });

    ws.on('init', (id, user) => {
        console.log('init', id, user)
    })

    ws.on('update', user => {
        console.log('update', user)
    })
})();