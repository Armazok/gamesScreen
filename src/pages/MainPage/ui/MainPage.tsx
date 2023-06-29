import classes from './MainPage.module.scss';
import Win from '../../../assets/icon/win.svg';
import {WinTeam} from "pages/MainPage/ui/winTeam/WinTeam";
import {LoseTeam} from "pages/MainPage/ui/loseTeam/LoseTeam";
import {useState} from "react";
import {IPlayer} from "utils/generetePlayers";

const MainPage = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handleInfoClick = (player: number) => {
        setSelectedPlayer(player);
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
                <WinTeam selectedPlayer={selectedPlayer} handleInfoClick={handleInfoClick} setSelectedPlayer={setSelectedPlayer}/>
                <LoseTeam handleInfoClick={handleInfoClick}/>
                {/*<SelectedPlayer selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />*/}
            </div>
        </main>
    );
};

export default MainPage;
