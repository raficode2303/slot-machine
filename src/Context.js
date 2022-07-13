import { useState, createContext, useContext } from 'react'
// helpers
import { importSounds } from './helpers'
// audio
const sounds = importSounds()
console.log('sounds:', sounds)

export const Context = createContext()

export const SlotContextProvider = ({ children }) => {
  console.log('osunds at Context: ', sounds)
  // const [loading, setLoading] = useState(true)
  const [numberOfreels, setNumberOfreels] = useState(3)
  const [buttonChanged, setButtonChanged] = useState(() => false)
  const [reelPosition, setReelPosition] = useState(() => 0)
  const [audioStart, setAudioStart] = useState(
    () => new Audio(Object.values(sounds)[0])
  )

  const translateReels = () => {
    console.log('enter RotateReelsRotateReels')
    setButtonChanged(true)
    audioStart.play()
  }
  console.log('reelPosition at Context.js: ', reelPosition)
  console.log('audioStart at Context.js: ', audioStart)
  return (
    <Context.Provider
      value={{
        reelPosition,
        buttonChanged,
        // numberOfreels,
        translateReels,
        setReelPosition,
        setButtonChanged,
      }}
    >
      {children}
    </Context.Provider>
  )
}
// custom Hook
export const useGlobalContext = () => useContext(Context)
