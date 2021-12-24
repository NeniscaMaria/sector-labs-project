import '../style/mainPage.css';
import {SearchSection} from "./SearchSection";

// This component loads the main page

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
