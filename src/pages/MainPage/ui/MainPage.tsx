import classes from './MainPage.module.scss';
import Win from '../../../assets/icon/win.svg';
import {WinTeam} from "pages/MainPage/ui/winTeam/WinTeam";
import {LoseTeam} from "pages/MainPage/ui/loseTeam/LoseTeam";
import {useEffect, useState} from "react";
import {generateRandomPlayers, IPlayer} from "utils/generetePlayers";

const MainPage = () => {

    const [showSelectedPlayer, setShowSelectedPlayer] = useState(null);
    const [losingTeam, setLosingTeam] = useState<IPlayer[]>([]);
    const [winningTeam, setWinningTeam] = useState<IPlayer[]>([]);

    const handleInfoClick = (idPlayer: number) => {
        if (showSelectedPlayer === idPlayer) {
            setShowSelectedPlayer(null);
        } else {
            setShowSelectedPlayer(idPlayer);
        }
    };


    useEffect(() => {
        setLosingTeam(generateRandomPlayers());
        setWinningTeam(generateRandomPlayers());
    }, []);



    return (
        <main className={classes.container}>
            <div className={classes.gameResults}>Game Results</div>

            <div className={classes.infoStatus}>
                <h3 className={classes.winningTeam}>
                    <Win width={'60'} height={'60'} className={classes.winIcon} />
                </h3>
            </div>

            <div className={classes.teamsContainer}>
                <WinTeam
                    winningTeam={winningTeam}
                    setWinningTeam={setWinningTeam}
                    selectedPlayer={showSelectedPlayer}
                    setSelectedPlayer={setShowSelectedPlayer}
                    handleInfoClick={handleInfoClick}
                />
                <LoseTeam
                    losingTeam={losingTeam}
                    setLosingTeam={setLosingTeam}
                    selectedPlayer={showSelectedPlayer}
                    setSelectedPlayer={setShowSelectedPlayer}
                    handleInfoClick={handleInfoClick}
                />
            </div>
        </main>
    );
};

export default MainPage;