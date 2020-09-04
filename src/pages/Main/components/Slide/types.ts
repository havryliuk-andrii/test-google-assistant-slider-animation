export type TDevice = {
  url: string,
  width: string,
  height: string,
}

export type TRightBlock = {
  text: string,
  link: string,
}

export type TImages = {
  bg: string
  left: string
  device: TDevice
  right: TRightBlock
}

export type TAnimated = {
  animated: boolean
  isVisible: boolean
}