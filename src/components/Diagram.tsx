import React from 'react';
import NodeBlock from './NodeBlock';
import TextBlock from './TextBlock';
import UrlBlock from './UrlBlock';
import { BlockNodeType, BlockTextType, BlockType, BlockUrlType } from '../data/diagram';


type DigriamProps = {
	diagramData: BlockNodeType;
	setSelect: React.Dispatch<React.SetStateAction<BlockNodeType>>;
}

const Diagram = (props: DigriamProps) => {

	const typeIdentifier = (block: BlockType): JSX.Element => {
		if (block.type === 'node') {
			return parseNode(block as BlockNodeType);
		} else if (block.type === 'text') {
			return parseText(block as BlockTextType)
		} else if (block.type === 'url') {
			return parseUrl(block as BlockUrlType)
		} else {
			return (<></>)
		}
	}

	const parseUrl = (block: BlockUrlType): JSX.Element => {
		return (
			<div className='parent'>
				<UrlBlock urls={block.urls} />
			</div>
		)
	}

	const parseText = (block: BlockTextType): JSX.Element => {
		return (
			<div className='parent'>
				<TextBlock text={block.text} />
			</div >
		)
	}

	const parseNode = (block: BlockNodeType): JSX.Element => {
		return (
			<div className='parent'>
				<div onClick={ () => props.setSelect(block) } >
					<NodeBlock name={block.name} type={block.is} />
				</div>
				<div className='child'>
					{
						block.choice.map(choice => typeIdentifier(choice))
					}
				</div>
			</div>
		)
	}

	return (
		<div className='diagram'>
			<div className='parent'>
				<div className='child'>
					{typeIdentifier(props.diagramData)}
				</div>
			</div>
		</div >
	);
}

export default Diagram;