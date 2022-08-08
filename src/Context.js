import { useState, createContext, useContext, useRef, useEffect } from 'react'
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

  const [coinsPlayed, setCoinsPlayed] = useState({
    name: 'coins played',
    value: null,
    size: 'fit-content',
  })
  const [winnerPaid, setWinnerPaid] = useState({
    name: 'winner paid',
    value: 15,
    size: undefined,
  })
  const [credits, setCredits] = useState({
    name: 'credits',
    value: winnerPaid.value - coinsPlayed.value,
    size: undefined,
  })
  const [banana, setBanana] = useState({ name: 'banana', value: 999 })
  const [screensData, setScreensData] = useState([])

  useEffect(() => {
    setCredits({
      name: 'credits',
      value: winnerPaid.value - coinsPlayed.value,
      size: undefined,
    })
  }, [coinsPlayed, winnerPaid])

  useEffect(() => {
    setScreensData([winnerPaid, credits, coinsPlayed, banana])
  }, [coinsPlayed, winnerPaid, credits])
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
  console.log(coinsPlayed, setCoinsPlayed)
  return (
    <Context.Provider
      value={{
        reelPosition,
        buttonChanged,
        numberOfreels,
        coinsPlayed,
        screensData,
        translateReels,
        setReelPosition,
        setButtonChanged,
        setCoinsPlayed,
        setScreensData,
        setWinnerPaid,
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
