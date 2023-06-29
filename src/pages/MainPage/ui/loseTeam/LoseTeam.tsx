import React, {FC, memo, useEffect, useState} from 'react';
import classes from "pages/MainPage/ui/MainPage.module.scss";
import Info from "assets/icon/information.svg";
import {generateRandomPlayers, IPlayer} from "utils/generetePlayers";

interface ILoseTeam {
    handleInfoClick: (player: number) =>void
}

export const LoseTeam: FC<ILoseTeam> = memo(({handleInfoClick}) => {
    const [losingTeam, setLosingTeam] = useState<IPlayer[]>([]);

    useEffect(() => {
        setLosingTeam(generateRandomPlayers());
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
                    {losingTeam
                        .sort((a, b) => b.score - a.score)
                        .map((player, index) => (
                            <tr key={index}>
                                <td className={player.state === 'dead' ? classes.dead : ''}>{player.nickname}</td>
                                <td>{player.score}</td>
                                <td>
                                    <button className={classes.infoButton} onClick={() => handleInfoClick(index)}>
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
