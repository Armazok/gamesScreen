import {Dispatch, FC, memo} from 'react';
import classes from "pages/MainPage/ui/MainPage.module.scss";
import Info from "assets/icon/information.svg";
import {IPlayer} from "utils/generetePlayers";
import {SelectedPlayer} from "pages/MainPage/ui/selectedPlayer/SelecetedPlayer";

interface ILoseTeam {
    handleInfoClick: (index: number) => void
    selectedPlayer: any
    setSelectedPlayer: Dispatch<any>
    losingTeam: IPlayer[]
    setLosingTeam: (player: IPlayer[]) => void
}

export const LoseTeam: FC<ILoseTeam> = memo(({setSelectedPlayer, selectedPlayer, losingTeam, setLosingTeam}) => {
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
