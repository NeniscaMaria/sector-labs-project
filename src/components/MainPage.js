import '../style/mainPage.css';
import {SearchSection} from "./SearchSection";

export const MainPage = () => {
    return (
        <div className={'main-page-container'}>
            <header className={'page-header'}>
                Welcome to Github Gists!
            </header>
            <SearchSection/>
        </div>
    );
}
