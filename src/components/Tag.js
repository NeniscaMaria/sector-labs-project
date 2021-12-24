import '../style/tag.css';
import PropTypes from "prop-types";

// This component displays one tag with the language and color

export const Tag = (props) => {
    const {language, color} = props;
    return (
        <div className={'tag-container'} style={{backgroundColor: color}}>
            <div className={'language'}>{language}</div>
        </div>
    );
}

Tag.propTypes = {
    language: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}
