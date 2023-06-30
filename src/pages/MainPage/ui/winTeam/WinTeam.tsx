import {Dispatch, FC, memo, useEffect, useState} from 'react';
import classes from "pages/MainPage/ui/MainPage.module.scss";
import Info from "assets/icon/information.svg";
import {generateRandomPlayers, IPlayer} from "utils/generetePlayers";
import {SelectedPlayer} from "pages/MainPage/ui/selectedPlayer/SelecetedPlayer";

interface IWinTeam {
    handleInfoClick: (index: number) => void
    selectedPlayer: any
    setSelectedPlayer: Dispatch<any>
    winningTeam: IPlayer[]
    setWinningTeam: (player: IPlayer[]) =>void
}

export const WinTeam: FC<IWinTeam> = memo(({setSelectedPlayer, selectedPlayer, setWinningTeam, winningTeam}) => {

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
                    .map((player) => (
                        <tr key={player.id}>
                            <td className={player.state === 'dead' ? classes.dead : ''}>{player.nickname}</td>
                            <td>{player.score}</td>
                            <td>
                                <div>
                                    <button onClick={() => setSelectedPlayer(player.id)}>
                                        <Info/>
                                    </button>
                                    {selectedPlayer === player.id && (
                                        <SelectedPlayer
                                            selectedPlayer={player}
                                            setSelectedPlayer={() => setSelectedPlayer(null)}
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