import React from 'react';

interface UrlProps {
    urls: { text: string; url: string; }[];
}

const UrlBlock = (props: UrlProps) => {
    console.log('url', props.urls)
    return (
        <div className='block block-url'>
            {
                props.urls.map(url => (
                    <a className='block-url' href ={url.url} > { url.text } </a>
                ))
            }
        </div>
    )
}

export default UrlBlock;