import React from 'react';
import { BlockNodeType, BlockTextType, BlockUrlType, BlockType } from '../data/diagram';
import NodeBlock from './NodeBlock';


type ListNextNodeProps = {
	// nodes: (BlockNodeType | BlockTextType | BlockUrlType)
	nodes: BlockType[];
	setSelect: React.Dispatch<React.SetStateAction<BlockNodeType>>;
}
const ListNextNode = (props: ListNextNodeProps) => {

	const parserNode = (block: BlockType, key: number) => {
		if (block.type === 'node') {
			const node = block as BlockNodeType;
			return (
				<div
          style={{ margin: '1em', flex: 1}}
          onClick={() => {
            props.setSelect(node);
          }}
          key={key}>
					<NodeBlock name={node.name} type={node.is} />
				</div>
			)
		}
	}

	return (
		<div className='nextNode'>
			{
				props.nodes.map((node, key) => parserNode(node, key))
			}
		</div>
	)
}

export default ListNextNode;