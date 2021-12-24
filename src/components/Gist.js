import '../style/gist.css';
import {Accordion, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Tags} from "./Tags";
import {UserAvatars} from "./UserAvatars";
import {AccordionFileDetails} from "./AccordionFileDetails";
import PropTypes from "prop-types";

// This component displays one gist in the accordion with the following information:
// gist url, last 3 fork owners avatars and file type tags

export const Gist = (props) => {
    const {id, url, files} = props;

    const getAccordionSummary = () => {
        return (
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography className={'url'}>{url}</Typography>
                <UserAvatars gistId={id}/>
                <Tags files={files}/>
            </AccordionSummary>);
    }

    return (
        <div className={'gist'} key={id}>
            <Accordion className={'accordion'}>
                {getAccordionSummary()}
                {Object.entries(files).map(([key, {filename, raw_url, language}])=>
                     <AccordionFileDetails key={filename} filename={filename}
                        raw_url={raw_url} language={language}/>
                )}
                </Accordion>
        </div>);
}

Gist.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    files: PropTypes.object.isRequired
}