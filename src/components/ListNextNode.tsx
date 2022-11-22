import React from 'react';
import { BlockNodeType, BlockTextType, BlockUrlType, BlockType } from '../data/diagram';
import NodeBlock from './NodeBlock';


type ListNextNodeProps = {
	// nodes: (BlockNodeType | BlockTextType | BlockUrlType)
	nodes: BlockType[];
	setSelect: React.Dispatch<React.SetStateAction<BlockNodeType>>;
}
const ListNextNode = (props: ListNextNodeProps) => {

	const parserNode = (block: BlockType) => {
		if (block.type == 'node') {
			const node = block as BlockNodeType;
			return (
				<div style={{ margin: '1em'}} onClick={() => {
					if (node.choice.filter(choice => choice.type == 'node').length > 0){
						props.setSelect(node);
					}
				}}>
					<NodeBlock name={node.name} type={node.is} />
				</div>
			)
		}
	}

	return (
		<div style={{position: 'fixed', top: 0, right: 0, backgroundColor: 'white'}}>
			{
				props.nodes.map(node => parserNode(node))
			}
		</div>
	)
}

export default ListNextNode;