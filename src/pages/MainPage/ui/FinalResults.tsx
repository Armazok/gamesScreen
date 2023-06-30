import classes from './FinalResults.module.scss';
import Win from '../../../assets/icon/win.svg';
import {TeamTwo} from "pages/MainPage/ui/teamTwo/TeamTwo";
import {TeamOne} from "pages/MainPage/ui/teamOne/TeamOne";
import {useEffect, useState} from "react";
import {generateRandomPlayers, IPlayer} from "utils/generetePlayers";

const FinalResults = () => {

    const [showSelectedPlayer, setShowSelectedPlayer] = useState(null);
    const [teamOne, setTeamOne] = useState<IPlayer[]>([]);
    const [teamTwo, setTeamTwo] = useState<IPlayer[]>([]);

    const handleInfoClick = (idPlayer: number) => {
        if (showSelectedPlayer === idPlayer) {
            setShowSelectedPlayer(null);
        } else {
            setShowSelectedPlayer(idPlayer);
        }
    };


    useEffect(() => {
        setTeamOne(generateRandomPlayers());
        setTeamTwo(generateRandomPlayers());
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
                <TeamTwo
                    teamTwo={teamTwo}
                    setTeamTwo={setTeamTwo}
                    selectedPlayer={showSelectedPlayer}
                    setSelectedPlayer={setShowSelectedPlayer}
                    handleInfoClick={handleInfoClick}
                />
                <TeamOne
                    teamOne={teamOne}
                    setTeamOne={setTeamOne}
                    selectedPlayer={showSelectedPlayer}
                    setSelectedPlayer={setShowSelectedPlayer}
                    handleInfoClick={handleInfoClick}
                />
            </div>
        </main>
    );
};

export default FinalResults;