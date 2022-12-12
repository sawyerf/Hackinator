import React from 'react';

interface NodeProps {
    name: string;
    type: string;
    isDiagram: boolean;
}

const NodeBlock = (props: NodeProps) => {
    const idName = props.name.toLowerCase().replace(' ', '-');
    return (
        <div onClick={() => { window.location.hash = idName }} className={`block block-node block-type-${props.type}`} >
            {
                props.isDiagram ?
                    <div id={idName} style={{ position: 'absolute', transform: 'translateY(-50vh)' }}></div>
                : <></>
            }
            <p className={`block-node block-type-${props.type}`}>{props.name}</p>
        </div>
    )
}

export default NodeBlock;