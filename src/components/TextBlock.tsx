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
                props.text.map((line, key) => (
                    <li className='block-text' key={key}>
                        <p className='block-text' > { line } </p>
                        <div className='copy' onClick={() => copyLine(line)} />
                    </li>
                ))
            }
        </div>
    )
}

export default TextBlock;