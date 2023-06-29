import classes from './MainPage.module.scss';
import Win from '../../../assets/icon/win.svg';
import {WinTeam} from "pages/MainPage/ui/winTeam/WinTeam";
import {LoseTeam} from "pages/MainPage/ui/loseTeam/LoseTeam";
import {useState} from "react";

const MainPage = () => {

    const [showSelectedPlayer, setShowSelectedPlayer] = useState(null);

    const handleInfoClick = (idPlayer: number) => {
        if (showSelectedPlayer === idPlayer) {
            setShowSelectedPlayer(null);
        } else {
            setShowSelectedPlayer(idPlayer);
        }
    };

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
                <WinTeam  selectedPlayer={showSelectedPlayer}  setSelectedPlayer={setShowSelectedPlayer} handleInfoClick={handleInfoClick}/>
                <LoseTeam selectedPlayer={showSelectedPlayer} setSelectedPlayer={setShowSelectedPlayer} handleInfoClick={handleInfoClick}/>
            </div>
        </main>
    );
};

export default MainPage;