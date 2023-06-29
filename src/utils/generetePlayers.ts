import { v4 as uuidv4 } from 'uuid';

export interface IPlayer {
    id: string
    kills: number;
    score: number;
    nickname: string;
    state: string;
    deaths: number
}
export function generateRandomPlayers() {
    const players: IPlayer[] = [];

    for (let i = 0; i < 50; i++) {
        const nickname = generateRandomNickname();
        const score = Math.floor(Math.random() * 100);
        const state = Math.random() < 0.5 ? 'alive' : 'dead';
        const kills = Math.floor(Math.random() * 10);
        const deaths = Math.floor(Math.random() * 10);
        const id = uuidv4();


        const player = {
            id,
            nickname,
            score,
            state,
            kills,
            deaths,
        };

        players.push(player);
    }

    return players;
}

function generateRandomNickname() {
    const adjectives = ['Great', 'Awesome', 'Amazing', 'Fantastic', 'Incredible'];
    const nouns = ['Player', 'Gamer', 'Warrior', 'Hero', 'Champion'];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return randomAdjective + randomNoun;
}