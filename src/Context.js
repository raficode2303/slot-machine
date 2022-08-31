// ==TODO==:make all buttons at 1 state

import { useState, createContext, useContext, useRef, useEffect } from 'react'
// helpers
// **TODO**: import symbols from here
import { importSounds } from './helpers'
// audio
const sounds = importSounds()
console.log('sounds:', sounds)

// no need too export - we use GlobalContext custom hook
const Context = createContext()

export const SlotContextProvider = ({ children }) => {
  console.log('sounds at Context: ', sounds)
  // const [loading, setLoading] = useState(true)
  const [numberOfreels, setNumberOfreels] = useState(3)
  const [visibleSymbols, setVisibleSymbols] = useState(3)
  const [buttonChanged, setButtonChanged] = useState(() => false)
  const [topPosition, setTopPosition] = useState(() => 0)
  const [visibleSymbolsIds, setVisibleSymbolsIds] = useState(() => [1, 1, 1])
  const [reelPosition, setReelPosition] = useState(() => 0)

  const [coinsPlayed, setCoinsPlayed] = useState({
    name: 'coins played',
    value: null,
    size: 'fit-content',
  })
  const [winnerPaid, setWinnerPaid] = useState({
    name: 'winner paid',
    value: null,
    size: undefined,
  })
  const [credits, setCredits] = useState({})

  const [screensData, setScreensData] = useState([])

  useEffect(() => {
    setCredits({
      name: 'credits',
      value: 200 + winnerPaid.value - coinsPlayed.value,
      size: undefined,
    })
  }, [coinsPlayed, winnerPaid])

  useEffect(() => {
    setScreensData([winnerPaid, credits, coinsPlayed])
  }, [coinsPlayed, winnerPaid, credits])
  // audio with Ref
  const audioStart = useRef(new Audio(Object.values(sounds)[0]))
  // **TODO**: get symbolHeight from context...
  const symbolHeight = useRef(200)
  const reelHeight = useRef(symbolHeight.current * visibleSymbols) // 600

  const rollReels = () => {
    console.log('enter RotateReelsRotateReels')
    setButtonChanged(true)
    audioStart.current.play()
    // for now the reel start always from the same position
    // need to change this that it will continue to spin from the last stop
    setVisibleSymbolsIds((prev) =>
      prev.map((_currentRandomid) => getRandomSymbolIds())
    )
    setReelPosition((perv) => perv - symbolHeight.current * 15 * 2) //  RELL ROOLS TWICE
  }
  console.log('visibleSymbolsIds: ', visibleSymbolsIds)

  function getRandomSymbolIds() {
    // **TODO**: get amount of symbols from helpers.js

    return Math.floor(Math.random() * 15) + 1 // 15 is the amount unike of symbols
  }
  return (
    <Context.Provider
      value={{
        topPosition,
        visibleSymbols,
        visibleSymbolsIds,
        reelPosition,
        buttonChanged,
        numberOfreels,
        coinsPlayed,
        screensData,
        rollReels,
        setTopPosition,
        setVisibleSymbolsIds,
        setButtonChanged,
        setCoinsPlayed,
        setScreensData,
        setWinnerPaid,
        setReelPosition,
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
  console.log('%c context reneders', 'border:5px dotted red')

  return context
}
