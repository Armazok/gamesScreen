import classes from './MainPage.module.scss';
import Info from '../../../assets/icon/information.svg';
import Win from '../../../assets/icon/win.svg';
import { useState, useEffect } from 'react';

const MainPage = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [winningTeam, setWinningTeam] = useState([]);
    const [losingTeam, setLosingTeam] = useState([]);

    useEffect(() => {
        setWinningTeam(generateRandomPlayers());
        setLosingTeam(generateRandomPlayers());
    }, []);

    const handleInfoClick = (player: any) => {
        setSelectedPlayer(player);
    };

    function generateRandomPlayers() {
        const players = [];

        for (let i = 0; i < 50; i++) {
            const nickname = generateRandomNickname();
            const score = Math.floor(Math.random() * 100);
            const state = Math.random() < 0.5 ? 'alive' : 'dead';
            const kills = Math.floor(Math.random() * 10);
            const deaths = Math.floor(Math.random() * 10);

            const player = {
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

    return (
        <main className={classes.container}>
            <div className={classes.gameResults}>Game Results</div>
            <div className={classes.infoStatus}>
                <h3 className={classes.winningTeam}>
                    Winning Team
                    <Win width={'60'} height={'60'}  className={classes.winIcon} />
                </h3>
            </div>


            <div className={classes.teamsContainer}>
                <div className={`${classes.teamContainer} ${classes.customScroll}`}>
                    <table className={classes.teamTable}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Information</th>
                        </tr>
                        </thead>
                        <tbody>
                        {winningTeam
                            .sort((a, b) => b.score - a.score)
                            .map((player, index) => (
                                <tr key={index}>
                                    <td className={player.state === 'dead' ? classes.dead : ''}>{player.nickname}</td>
                                    <td>{player.score}</td>
                                    <td>
                                        <button onClick={() => handleInfoClick(player)}>
                                            <Info />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={`${classes.teamContainer} ${classes.customScroll}`}>
                    <table className={classes.teamTable}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Information</th>
                        </tr>
                        </thead>
                        <tbody>
                        {losingTeam
                            .sort((a, b) => b.score - a.score)
                            .map((player, index) => (
                                <tr key={index}>
                                    <td className={player.state === 'dead' ? classes.dead : ''}>{player.nickname}</td>
                                    <td>{player.score}</td>
                                    <td>
                                        <button className={classes.infoButton} onClick={() => handleInfoClick(player)}>
                                            <Info />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {selectedPlayer && (
                    <div className={classes.modal}>
                        <div className={classes.modalContent}>
                            <h2>Player Info</h2>
                            <p>Kills: {selectedPlayer.kills}</p>
                            <p>Deaths: {selectedPlayer.deaths}</p>
                            <button>Add Friend</button>
                            <button onClick={() => setSelectedPlayer(null)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default MainPage;
