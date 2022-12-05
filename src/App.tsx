import React, { useState } from 'react';
import diagramData from './data/diagram.json'
import { BlockNodeType, BlockType } from './data/diagram';
import Diagram from './components/Diagram';
import Information from './components/Information';
import ListNextNode from './components/ListNextNode';
import ScrollContainer from 'react-indiana-drag-scroll'


const App = () => {
	const data: BlockNodeType = diagramData as BlockNodeType;
  const [ node,  setNode ] = useState<BlockNodeType>(data)

  return (
    <ScrollContainer className="scroll-container">
      <div className="App">
        <Diagram diagramData={data} setSelect={setNode}/>
        <Information node={node} setSelect={setNode}/>
      </div>
    </ScrollContainer>
  )
}

export default App;