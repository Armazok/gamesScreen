import React, {FC, memo, useEffect, useState} from 'react';
import classes from "pages/MainPage/ui/MainPage.module.scss";
import Info from "assets/icon/information.svg";
import {generateRandomPlayers, IPlayer} from "utils/generetePlayers";

interface IWinTeam {
    handleInfoClick: (player: IPlayer) => void
}

export const WinTeam: FC<IWinTeam> = memo(({handleInfoClick}) => {
    const [winningTeam, setWinningTeam] = useState<IPlayer[]>([]);

    useEffect(() => {
        setWinningTeam(generateRandomPlayers());
    }, []);


    return (
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
    );
});
