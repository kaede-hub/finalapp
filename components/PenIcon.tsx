import { FaPen } from "react-icons/fa"
import { IconContext } from 'react-icons'

export const PenIcon: React.VFC = () => {
  return (
    <IconContext.Provider  value={{ color: 'black' }}>
      <FaPen />
    </IconContext.Provider>
  )
}

