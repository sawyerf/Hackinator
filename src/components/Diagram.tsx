import React from 'react';
import NodeBlock from './NodeBlock';
import TextBlock from './TextBlock';
import UrlBlock from './UrlBlock';
import { BlockNodeType, BlockTextType, BlockType, BlockUrlType } from '../data/diagram';
import { Space } from 'react-zoomable-ui';

type DiagramProps = {
	diagramData: BlockNodeType;
	setSelect: React.Dispatch<React.SetStateAction<BlockNodeType>>;
}

const Diagram = (props: DiagramProps) => {

	const typeIdentifier = (block: BlockType, key: number): JSX.Element => {
		if (block.type === 'node') {
			return parseNode(block as BlockNodeType, key);
		} else if (block.type === 'text') {
			return parseText(block as BlockTextType, key)
		} else if (block.type === 'url') {
			return parseUrl(block as BlockUrlType, key)
		} else {
			return (<></>)
		}
	}

	const parseUrl = (block: BlockUrlType, key: number): JSX.Element => {
		return (
			<div className='parent' key={key}>
				<UrlBlock urls={block.urls} />
			</div>
		)
	}

	const parseText = (block: BlockTextType, key: number): JSX.Element => {
		return (
			<div className='parent' key={key}>
				<TextBlock text={block.text} />
			</div >
		)
	}

	const parseNode = (block: BlockNodeType, key: number): JSX.Element => {
		return (
			<div className='parent' key={key}>
				<div onClick={ () => props.setSelect(block) } >
					<NodeBlock name={block.name} type={block.is} />
				</div>
				<div className='child'>
					{
						block.choice.map((choice, key) => typeIdentifier(choice, key))
					}
				</div>
			</div>
		)
	}

	return (
		<div className='diagram'>
      <Space>
        <div className='parent'>
          <div className='child'>
            {typeIdentifier(props.diagramData, 0)}
          </div>
        </div>
      </Space>
		</div>
	);
}

export default Diagram;