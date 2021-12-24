import '../style/userAvatars.css';
import {useEffect, useState} from "react";
import Avatar from "react-avatar";

export const UserAvatars = (props) => {
    const {gistId} = props;
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/gists/'+gistId+'/forks')
            .then(res => res.json())
            .then(forks=>{
                // sort the forks based on created_at date
                forks.sort(function(a, b) {
                    const keyA = new Date(a.created_at), keyB = new Date(b.created_at);
                    return (keyA > keyB) ? -1 : (keyA < keyB) ? 1 : 0;
                });
                // get only the three most recent fork owners
                setUsers(forks.slice(0,3).map(fork=> fork.owner));
            })
            .catch(error=>{console.log(error)});
    },[]);

    return (
        <div className={'avatars-container'}>
            {users.map(user=>
                    <Avatar className={'avatar'} src={user.avatar_url} title={user.login} key={user.login}/>
            )}
        </div>
    );
}
