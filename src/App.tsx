import React, { useState } from 'react';
import diagramData from './data/diagram.json'
import { BlockNodeType, BlockType } from './data/diagram';
import Diagram from './components/Diagram';
import ListNextNode from './components/ListNextNode';


const App = () => {
	const data: BlockNodeType = diagramData as BlockNodeType;
  const [ node,  setNode ] = useState<BlockNodeType>(data)

  return (
    <div className="App">
      <Diagram diagramData={data} setSelect={setNode}/>
      <ListNextNode nodes={node.choice} setSelect={setNode}/>
    </div>
  )
}

export default App;