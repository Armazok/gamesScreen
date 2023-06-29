import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import MainPage from "pages/MainPage/ui/MainPage";

const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <MainPage/>
        </div>
    );
};

export default App;
