import React from 'react';
import NodeBlock from './components/NodeBlock';
import TextBlock from './components/TextBlock';
import UrlBlock from './components/UrlBlock';
import diagramData from './data/diagram.json'

type BlockNodeType = {
  type: string;
  name: string;
  is: string;
  choice: (BlockTextType | BlockNodeType | BlockUrlType)[]
}

type BlockTextType = {
  type: string;
  text: string[]
}

type BlockUrlType = {
  type: string;
  urls: { text: string, url: string }[]
}

const App = () => {

  const typeIdentifier = (block: BlockTextType | BlockNodeType | BlockUrlType): JSX.Element => {
    console.log('block', block)
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
      <UrlBlock urls={block.urls} />
    )
  }

  const parseText = (block: BlockTextType): JSX.Element => {
    return (
      <TextBlock text={block.text} />
    )
  }

  const parseNode = (block: BlockNodeType): JSX.Element => {
    return (
      <div className='parent'>
        <NodeBlock name={block.name} type={block.is} />
        <div className='child'>
          {
            block.choice.map(choice => typeIdentifier(choice))
          }
        </div>
      </div>
    )
  }

  const data: BlockNodeType = diagramData as BlockNodeType;
  return (
    <div className="App">
      {typeIdentifier(data)}
    </div>
  );
}

export default App;
