import '../style/gist.css';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Gist = (props) => {
    const {id, url, files} = props;

    const getAccordionDetails = (filename) => {
        return (
            <AccordionDetails>
                <Typography>
                    {filename}
                </Typography>
            </AccordionDetails>
        );
    }
    return (
        <div className={'gist'} key={id}>
            <Accordion className={'accordion'}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>{url}</Typography>
                </AccordionSummary>
                {Object.entries(files).map(([key, value])=>{
                    const {filename, language, raw_url, size, type} = value;
                    return getAccordionDetails(filename);
                })}
                </Accordion>
        </div>);
}
