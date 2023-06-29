import React, {Dispatch, FC, memo, useEffect, useState} from 'react';
import classes from "pages/MainPage/ui/MainPage.module.scss";
import Info from "assets/icon/information.svg";
import {generateRandomPlayers, IPlayer} from "utils/generetePlayers";
import {SelectedPlayer} from "pages/MainPage/ui/selectedPlayer/SelecetedPlayer";

interface IWinTeam {
    selectedPlayer: any
    handleInfoClick: (indexPlayer: number) => void
    setSelectedPlayer: Dispatch<any>
}

export const WinTeam: FC<IWinTeam> = memo(({handleInfoClick, setSelectedPlayer, selectedPlayer}) => {
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
                                    <div className={classes.modalWrap}>
                                        <button onClick={() => handleInfoClick(index)}>
                                            <Info/>
                                        </button>
                                            {selectedPlayer === index && (
                                                <SelectedPlayer
                                                    selectedPlayer={selectedPlayer}
                                                    setSelectedPlayer={setSelectedPlayer}
                                                />
                                            )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
});
