import { StandardWebSocketClient } from '../../deps.ts';
import { Routes } from '../rest/routes.ts';
import { User } from './getUser.ts';
import { Snowflake, } from '../types/global.ts';
import { EventEmitter } from '../../deps.ts';

export type Events = {
    init: [id: Snowflake, user: User];
    update: [user: User];
}

export interface Options {
    subscribe: Array<Snowflake>;
}

export class WebSocket extends EventEmitter<Events> {
    ws: StandardWebSocketClient | null;
    subscribe: Array<Snowflake>;

    constructor(options: Options) {
        super();

        this.ws = null;
        this.subscribe = options.subscribe;

        this.start();
    }

    private start() {
        this.ws = new StandardWebSocketClient(Routes.getRestWebsocketUrl());

        this.ws.on('open', () => {
            console.log('otvorené');

            this.ws?.send(
                JSON.stringify({
                    op: 2,
                    d: {
                        subscribe_to_ids: this.subscribe,
                    },
                }),
            );

            setInterval(() => {
                this.sendHeartbeat();
            }, 30000)
        })

        this.ws.on('message', (msg) => {
            const data = JSON.parse(msg.data);
            
            if (data.t === 'INIT_STATE') {
                for (const [id, user] of Object.entries(data.d)) {
                    this.emit('init', id, user as User);
                }
            } else if (data.t === 'PRESENCE_UPDATE') {
                this.emit('update', data.d as User)
            }
        })
    }

    private sendHeartbeat() {
        this.ws?.send(JSON.stringify({
            op: 3
        }))
    }
}