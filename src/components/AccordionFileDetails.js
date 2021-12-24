import '../style/fileDetails.css';
import {AccordionDetails, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const AccordionFileDetails = (props) => {
    const {filename, raw_url, language} = props;
    const [fileContent, setFileContent] = useState('');

    const onFileClick = (raw_url) => {
        fetch(raw_url).then(res=>res.text())
            .then(data=>setFileContent(data));
    }

    return (
        <AccordionDetails key={filename} onClick={()=>onFileClick(raw_url)} className={'details-gist'}>
            <Typography>{filename}</Typography>
            {fileContent && <SyntaxHighlighter language={language} style={docco} className={'fileContent'}>
                {fileContent}
            </SyntaxHighlighter>}
        </AccordionDetails>
    );
}
