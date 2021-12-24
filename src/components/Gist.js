import '../style/gist.css';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Tags} from "./Tags";
import {UserAvatars} from "./UserAvatars";

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

    const getAccordionDetails = (filename) => {
        return (
            <AccordionDetails key={filename}>
                <Typography>
                    {filename}
                </Typography>
            </AccordionDetails>
        );
    }
    return (
        <div className={'gist'} key={id}>
            <Accordion className={'accordion'}>
                {getAccordionSummary()}
                {Object.entries(files).map(([key, value])=>{
                    const {filename, language, raw_url, size, type} = value;
                    return getAccordionDetails(filename);
                })}
                </Accordion>
        </div>);
}
