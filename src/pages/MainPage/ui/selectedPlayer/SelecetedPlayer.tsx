import {FC, memo} from 'react';
import classes from "pages/MainPage/ui/FinalResults.module.scss";
import {IPlayer} from "utils/generetePlayers";

interface ISelectedPlayer {
    selectedPlayer: IPlayer
    setSelectedPlayer: () => void
}

export const SelectedPlayer: FC<ISelectedPlayer> = memo(({selectedPlayer, setSelectedPlayer}) => {

    return (
        <>
            {selectedPlayer && (
                <div className={classes.modal}>
                    <div className={classes.modalContent}>
                        <h2>Player Info</h2>
                        <p>Name: {selectedPlayer.nickname}</p>
                        <p>Kills: {selectedPlayer.kills}</p>
                        <p>Deaths: {selectedPlayer.deaths}</p>
                        <button>Add Friend</button>
                        <button onClick={setSelectedPlayer}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
});
