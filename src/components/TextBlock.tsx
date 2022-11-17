import React from 'react';

interface TextProps {
    text: string[];
}

const TextBlock = (props: TextProps) => {
    const copyLine = (line: string) => {
        navigator.clipboard.writeText(line);
    }
    return (
        <div className='block block-text'>
            {
                props.text.map(line => (
                        <p className='block-text' onClick={() => copyLine(line)} > { line } </p>
                ))
            }
        </div>
    )
}

export default TextBlock;