import { useState, createContext, useContext, useRef } from 'react'
// helpers
import { importSounds } from './helpers'
// audio
const sounds = importSounds()
console.log('sounds:', sounds)

// no need too export - we use GlobalContext custom hook
const Context = createContext()

export const SlotContextProvider = ({ children }) => {
  console.log('osunds at Context: ', sounds)
  // const [loading, setLoading] = useState(true)
  const [numberOfreels, setNumberOfreels] = useState(3)
  const [buttonChanged, setButtonChanged] = useState(() => false)
  const [reelPosition, setReelPosition] = useState(() => 0)

  const [screensData, setScreensData] = useState([
    { name: 'winner paid', value: 15, size: undefined },
    { name: 'credits', value: 1049, size: undefined },
    { name: 'coins played', value: null, size: 'fit-content' },
    { name: 'banana', value: 999 },
  ])

  // audio with Ref
  const audioStart = useRef(new Audio(Object.values(sounds)[0]))

  const translateReels = () => {
    console.log('enter RotateReelsRotateReels')
    setButtonChanged(true)
    audioStart.current.play()
    // for now the reel start always from the sampe position
    // need to change this that it will continue to spin from the last stop
    setReelPosition(0)
  }
  console.log('reelPosition at Context.js: ', reelPosition)
  console.log('audioStart at Context.js: ', audioStart)
  return (
    <Context.Provider
      value={{
        reelPosition,
        buttonChanged,
        numberOfreels,
        screensData,
        translateReels,
        setReelPosition,
        setButtonChanged,
        setScreensData,
      }}
    >
      {children}
    </Context.Provider>
  )
}
// custom Hook
export const useGlobalContext = () => {
  const context = useContext(Context)
  console.log('context:', context)
  // credit for the if check: https://kentcdodds.com/blog/how-to-use-react-context-effectively
  if (context === undefined) {
    throw new Error('useCount must be used within a SlotContextProvider')
  }
  return context
}
