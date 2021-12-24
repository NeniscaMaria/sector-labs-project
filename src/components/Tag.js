import '../style/tag.css';

export const Tag = (props) => {
    const {language, color} = props;
    return (
        <div className={'tag-container'} style={{backgroundColor: color}}>
            <div className={'language'}>{language}</div>
        </div>
    );
}
