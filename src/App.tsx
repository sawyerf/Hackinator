import { useState } from 'react';
import diagramData from './data/diagram.json'
import { BlockNodeType } from './data/diagram';
import Diagram from './components/Diagram';
import Information from './components/Information';
import ScrollContainer from 'react-indiana-drag-scroll'

const App = () => {
	const data: BlockNodeType = diagramData as BlockNodeType;
  const [ node,  setNode ] = useState<BlockNodeType>(data)
  return (
    <div className="App">
      <ScrollContainer className="scroll-container">
        <Diagram diagramData={data} setSelect={setNode}/>
      </ScrollContainer>
      <Information node={node} setSelect={setNode}/>
    </div>
  )
}

export default App;