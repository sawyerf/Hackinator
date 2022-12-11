import { useState, useEffect, useCallback } from 'react';
import diagramData from './data/diagram.json'
import { BlockNodeType, BlockType } from './data/diagram';
import Diagram from './components/Diagram';
import Information from './components/Information';
import ListNextNode from './components/ListNextNode';
import ScrollContainer from 'react-indiana-drag-scroll'
import { Space } from 'react-zoomable-ui';



const App = () => {
	const data: BlockNodeType = diagramData as BlockNodeType;
  const [ node,  setNode ] = useState<BlockNodeType>(data)
  return (
    <div className="App">
      <ScrollContainer className="scroll-container">
        <Space>
          <Diagram diagramData={data} setSelect={setNode}/>
        </Space>
      </ScrollContainer>
      <Information node={node} setSelect={setNode}/>
    </div>
  )
}

export default App;