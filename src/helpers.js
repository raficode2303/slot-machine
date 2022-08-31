import symbol1 from './images/pngwing.com (1).png'
import symbol2 from './images/pngwing.com (2).png'
import symbol3 from './images/pngwing.com (3).png'
import symbol4 from './images/pngwing.com (4).png'
import symbol5 from './images/pngwing.com (5).png'
import symbol6 from './images/pngwing.com (6).png'
import symbol7 from './images/pngwing.com (7).png'
import symbol8 from './images/pngwing.com (8).png'
import symbol9 from './images/pngwing.com (9).png'
import symbol10 from './images/pngwing.com (10).png'
import symbol11 from './images/pngwing.com (11).png'
import symbol12 from './images/pngwing.com (12).png'
import symbol13 from './images/pngwing.com (13).png'
import symbol14 from './images/pngwing.com (14).png'
import symbol15 from './images/pngwing.com (15).png'

export const Symbols = [
  { url: symbol1, id: 1 },
  { url: symbol2, id: 2 },
  { url: symbol3, id: 3 },
  { url: symbol4, id: 4 },
  { url: symbol5, id: 5 },
  { url: symbol6, id: 6 },
  { url: symbol7, id: 7 },
  { url: symbol8, id: 8 },
  { url: symbol9, id: 9 },
  { url: symbol10, id: 10 },
  { url: symbol11, id: 11 },
  { url: symbol12, id: 12 },
  { url: symbol13, id: 13 },
  { url: symbol14, id: 14 },
  { url: symbol15, id: 15 },
]

export function shuffleArray(array) {
  let newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  console.log('return new array:', newArray)
  return newArray
}

// credit: https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
export function importSounds() {
  const r = require.context('./sounds', false, /\.(mp3|wav)$/)
  let sounds = {}
  r.keys().forEach((item, index) => {
    sounds[item.replace('./', '')] = r(item)
  })
  return sounds
}
