import '../style/gist.css';

export const Gist = (props) => {
    const {id, url} = props;
    return (
        <li className={'gist'} key={id}>
        {url}
    </li>);
}
