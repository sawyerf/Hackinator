import React, { useState } from 'react';
import diagramData from './data/diagram.json'
import { BlockNodeType, BlockType } from './data/diagram';
import Diagram from './components/Diagram';
import Information from './components/Information';


const App = () => {
	const data: BlockNodeType = diagramData as BlockNodeType;
  const [ node,  setNode ] = useState<BlockNodeType>(data)

  return (
    <div className="App">
      <Diagram diagramData={data} setSelect={setNode}/>
      <Information node={node} setSelect={setNode}/>
    </div>
  )
}

export default App;