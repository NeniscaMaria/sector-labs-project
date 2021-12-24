import '../style/fileDetails.css';
import {AccordionDetails, Typography} from "@mui/material";
import {useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactLoading from 'react-loading';

export const AccordionFileDetails = (props) => {
    const {filename, raw_url, language} = props;
    const [loading, setLoading] = useState(false);
    const [fileContent, setFileContent] = useState('');

    const onFileClick = (raw_url) => {
        setLoading(true);
        fetch(raw_url).then(res=>res.text())
            .then(data=>{
                setFileContent(data);
                setLoading(false);
            });
    }

    return (
        <AccordionDetails key={filename} onClick={()=>onFileClick(raw_url)} className={'details-gist'}>
            <Typography>{filename}</Typography>
            {loading && <ReactLoading className={'loading'} height={30} width={30} type={"spinningBubbles"}/>}
            {fileContent && <SyntaxHighlighter language={language} style={docco} className={'fileContent'}>
                {fileContent}
            </SyntaxHighlighter>}
        </AccordionDetails>
    );
}
