import React from 'react';
import NodeBlock from './components/NodeBlock';
import TextBlock from './components/TextBlock';
import diagramData from './data/diagram.json'

type BlockNodeType = {
  type: string;
  name: string;
  choice: (BlockTextType | BlockNodeType | BlockUrlType)[]
}

type BlockTextType = {
  type: string;
  text: string[]
}

type BlockUrlType = {
  type: string;
  urls: {text: string, url: string}[]
}

const App = () => {

  const typeIdentifier = (block: BlockTextType | BlockNodeType | BlockUrlType): JSX.Element => {
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
      <></>
    )
  }

  const parseText = (block: BlockTextType): JSX.Element => {
    return (
      <TextBlock text={block.text} />
    )
  }

  const parseNode = (block: BlockNodeType): JSX.Element => {
    for (const choice of block.choice) {
      return typeIdentifier(choice)
    }
    return (
      <NodeBlock name={block.name} type="vuln"/>
    )
  }

  return (
    <div className="App">
      <NodeBlock name="POST" type="classic" />
      <NodeBlock name="SQL Injection" type="vuln" />
      <TextBlock text={["' OR '1'='1", "*", "\" OR 1=1 # -- -",]} />
    </div>
  );
}

export default App;
