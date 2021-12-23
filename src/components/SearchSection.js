import '../style/searchSection.css';
import {useState} from "react";
import {Gist} from "./Gist";

export const SearchSection = () => {
    const [username, setUsername] = useState('');
    const [gists, setGists] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = (e) => {
        e.persist();
        setUsername(e.target.value);
    }

    const onClick = () => {
       fetch('https://api.github.com/users/'+username+'/gists')
           .then(res => res.json())
           .then(data=>{
                const {message} = data;
                !message && errorMessage.length && setErrorMessage('');
                !message && setGists(data);
                message && setErrorMessage(message);
            })
           .catch(error=>{
                setErrorMessage(error);
            });

    }

    const getGistsList = () => {
        return (
            <ul className={'gist-list'}>
                {gists.map(gist=> <Gist {...gist}/>)}
            </ul>
        );
    }

    const getErrorElement = () => {
        return (
            <div className={'error'}>
                {errorMessage}
            </div>
        );
    }
    return (
        <div className={'search-section-container'}>
            <div className={'form'}>
                <label className={'search-label'}>Input username:</label>
                <input type="text" id="username-input" name="username-input"
                       value={username} onChange={onChange}/>
                <button onClick={onClick}>Get Public Gists</button>
            </div>
            {!errorMessage.length && gists.length && getGistsList()}
            {errorMessage && getErrorElement()}
        </div>
    );
}
