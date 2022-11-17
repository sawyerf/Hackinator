import React from 'react';

interface TextProps {
    text: string[];
}

const TextBlock = (props: TextProps) => {
    return (
        <div className='block block-text'>
            {
                props.text.map(line => (
                        <p className='block-text'> { line } </p>
                ))
            }
        </div>
    )
}

export default TextBlock;