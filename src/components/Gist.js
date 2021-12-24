import '../style/gist.css';
import {Accordion, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Tags} from "./Tags";
import {UserAvatars} from "./UserAvatars";
import {AccordionFileDetails} from "./AccordionFileDetails";

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
                        raw_url={raw_url} language={language.toLowerCase()}/>
                )}
                </Accordion>
        </div>);
}
