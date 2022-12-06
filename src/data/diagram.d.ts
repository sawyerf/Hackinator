export type BlockNodeType = {
  type: string;
  name: string;
  description: string;
  is: string;
  choice: (BlockTextType | BlockNodeType | BlockUrlType)[]
}

export type BlockTextType = {
  type: string;
  text: string[]
}

export type BlockUrlType = {
  type: string;
  urls: { text: string, url: string }[]
}

export type BlockType = (BlockNodeType | BlockTextType | BlockUrlType)