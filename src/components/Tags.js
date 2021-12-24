import '../style/tags.css';
import {Tag} from "./Tag";
import {useEffect, useState} from "react";

export const Tags = (props) => {
    const {files} = props;
    const [tagsColor, setTagsColor] = useState({});

    useEffect(() => {
        const colors = {};
        Object.entries(files).forEach(([key, {language}]) => {
            colors[language] = getColor(language);
        });
        setTagsColor(colors);
    }, []);

    const getColor = (language) => {
        // generating a random color https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
        // we want to generate here a color based on the language
        // first we transform the language string to a number, by summing the ASCII code for each character
        const sumAscii = language.split('').reduce((a,b)=>
             isNaN(a) ? a.charCodeAt(0)+b.charCodeAt(0) : a + b.charCodeAt(0)
        );
        // now we need to normalize this sum to a value between 0 and 1
        let normalizedSum = sumAscii / Math.pow(10,sumAscii.toString().length);
        return '#' + Math.floor(normalizedSum * 16777215).toString(16);
    }

    return (
        <div className={'tags-container'}>
            {Object.entries(tagsColor).map(([key,value])=>
                <Tag language={key} color={value} key={key}/>)}
        </div>
    );
}
