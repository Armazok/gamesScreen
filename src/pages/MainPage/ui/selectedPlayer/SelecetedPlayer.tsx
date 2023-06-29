import React, {Dispatch, FC, memo} from 'react';
import classes from "pages/MainPage/ui/MainPage.module.scss";

interface ISelectedPlayer {
    selectedPlayer: any
    setSelectedPlayer: Dispatch<any>
}

export const SelectedPlayer: FC<ISelectedPlayer> = memo(({selectedPlayer, setSelectedPlayer}) => {
    return (
        <>
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
        </>
    );
});
