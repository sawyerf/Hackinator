import React from 'react';

interface NodeProps {
    name: string;
    type: string;
}

const NodeBlock = (props: NodeProps) => {
    return (
        <div className={`block block-node block-type-${props.type}`}>
            <p className={`block-node block-type-${props.type}`}>{props.name}</p>
        </div>
    )
}

export default NodeBlock;