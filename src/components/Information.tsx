import React from 'react';
import { BlockNodeType } from '../data/diagram';
import ListNextNode from './ListNextNode';

type InformationProps = {
    node: BlockNodeType;
    setSelect: React.Dispatch<React.SetStateAction<BlockNodeType>>;
}

const Information = (props: InformationProps) => {

    return (
        <div className='information'>
            <ListNextNode nodes={props.node.choice} setSelect={props.setSelect} />
            {
                props.node ? (
                    <div className='info-current'>
                        <h1 style={{ textAlign: 'center', fontSize: '1.5em', color: 'white' }}>{props.node?.name}</h1>
                        <p style={{ fontSize: '1em', color: 'white', margin: '1em', marginTop: '2em' }}>{props.node?.description}</p>
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default Information;