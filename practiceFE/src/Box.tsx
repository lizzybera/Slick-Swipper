import { FC } from "react"

interface iProps{
    bg : string
    text : string
}

const Box: FC<iProps> = ({bg, text}) => {
  return (
    <div className={`w-[200px] h-[300px] ${bg}  flex justify-center items-center rounded-2xl m-5`}>{text}</div>
  )
}

export default Box