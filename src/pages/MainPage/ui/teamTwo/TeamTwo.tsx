import {Dispatch, FC, memo} from 'react';
import classes from "pages/MainPage/ui/FinalResults.module.scss";
import Info from "assets/icon/information.svg";
import {IPlayer} from "utils/generetePlayers";
import {SelectedPlayer} from "pages/MainPage/ui/selectedPlayer/SelecetedPlayer";

interface IWinTeam {
    handleInfoClick: (index: number) => void
    selectedPlayer: any
    setSelectedPlayer: Dispatch<any>
    teamTwo: IPlayer[]
    setTeamTwo: (player: IPlayer[]) =>void
}

export const TeamTwo: FC<IWinTeam> = memo(({setSelectedPlayer, selectedPlayer, teamTwo}) => {

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
                {teamTwo
                    .sort((a, b) => b.score - a.score)
                    .map((player) => (
                        <tr key={player.id}>
                            <td className={player.state === 'dead' ? classes.dead : ''}>{player.nickname}</td>
                            <td>{player.score}</td>
                            <td>
                                <div>
                                    <button className={classes.buttonInfo} onClick={() => setSelectedPlayer(player.id)}>
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