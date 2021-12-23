import '../style/gist.css';

export const Gist = (props) => {
    const {id, files} = props;
    console.log(props);
    return (
        <div className={'gist'} key={id}>
            {Object.entries(files).map(([key, value])=>{
                const {filename, language, raw_url, size, type} = value;
                return (<div> {filename} {size}</div>);
            })}
        </div>);
}
