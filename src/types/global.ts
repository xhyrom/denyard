export type Snowflake = string;

export interface Button { 
    label: string,
    url: string,
}

export interface Spotify { 
    track_id: string,
    timestamps: {
        start: Date;
        end: Date;
    },
    song: string,
    artist: string,
    album_art_url: string,
    album: string,
}

export interface Activity {
    type: ActivityType,
    timestamps?: {
        start?: Date;
        end?: Date;
    },
    state?: string | null,
    emoji?: {
        name: string,
        id?: Snowflake,
        animated?: boolean,
    },
    party?: {
        id: string,
        size?: {
            current_size: number,
            max_size: number,
        }
    }
    name: string,
    id: string,
    url?: string | null;
    details?: string | null,
    instance?: boolean,
    created_at: number,
    assets?: {
        small_text?: string,
        small_image?: string,
        large_text?: string,
        large_image?: string,
    },
    buttons?: Array<Button>
    flags: ActivityFlags,
    application_id?: Snowflake,
}

export enum ActivityType {
    Playing = 0,
    Streaming = 1,
    Listening = 2,
    Watching = 3,
    Custom = 4,
    Competing = 5,
}

export enum ActivityFlags {
    Instance = 1 << 0,
    Join = 1 << 1,
    Spectate = 1 << 2,
    JoinRequest = 1 << 3,
    Sync = 1 << 4,
    Play = 1 << 5,
    PartyPiracyFriends = 1 << 6,
    PartyPiracyVoiceChannel = 1 << 7,
    Embedded = 1 << 8,
}

/**
 * From https://github.com/discordjs/discord-api-types/blob/main/payloads/v10/user.ts
 * https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
 export enum UserFlags {
	/**
	 * Discord Employee
	 */
	Staff = 1 << 0,
	/**
	 * Partnered Server Owner
	 */
	Partner = 1 << 1,
	/**
	 * HypeSquad Events Coordinator
	 */
	Hypesquad = 1 << 2,
	/**
	 * Bug Hunter Level 1
	 */
	BugHunterLevel1 = 1 << 3,
	/**
	 * House Bravery Member
	 */
	HypeSquadOnlineHouse1 = 1 << 6,
	/**
	 * House Brilliance Member
	 */
	HypeSquadOnlineHouse2 = 1 << 7,
	/**
	 * House Balance Member
	 */
	HypeSquadOnlineHouse3 = 1 << 8,
	/**
	 * Early Nitro Supporter
	 */
	PremiumEarlySupporter = 1 << 9,
	/**
	 * User is a [team](https://discord.com/developers/docs/topics/teams)
	 */
	TeamPseudoUser = 1 << 10,
	/**
	 * Bug Hunter Level 2
	 */
	BugHunterLevel2 = 1 << 14,
	/**
	 * Verified Bot
	 */
	VerifiedBot = 1 << 16,
	/**
	 * Early Verified Bot Developer
	 */
	VerifiedDeveloper = 1 << 17,
	/**
	 * Discord Certified Moderator
	 */
	CertifiedModerator = 1 << 18,
	/**
	 * Bot uses only [HTTP interactions](https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction) and is shown in the online member list
	 */
	BotHTTPInteractions = 1 << 19,
	/**
	 * User has been identified as spammer
	 */
	Spammer = 1 << 20,
}